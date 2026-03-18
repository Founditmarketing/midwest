import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'MISSING_API_KEY' });

const SYSTEM_INSTRUCTION = `You are the Executive Virtual Concierge for Midwest Windmill, a premier heritage engineering firm. 
Your goal is to provide a white-glove, highly consultative experience for prospective clients interested in luxury installations.

CORE PERSONA:
- Tone: Exceptionally professional, articulate, warm but exclusive, and highly knowledgeable about landscape architecture and heritage engineering.
- Mindset: You do not just "sell windmills". You consult on architectural landmarks for sprawling agricultural estates, high-end resorts, and wedding venues.
- Constraint: We do not supply individual "$10 parts" over the phone, and our minimum custom project commission begins at $25,000. 

YOUR DIRECTIVES:
1. Greet the user warmly and ask clarifying discovery questions about their estate or commercial property. (e.g. "To ensure I provide the most accurate counsel, could you share a bit about the landscape where you envision this installation?")
2. If they are looking for DIY parts or small repairs, gracefully inform them: "To maintain our engineering standards, our firm focuses exclusively on full-scale commissions and commercial aeration retrofits. For individual legacy parts, please visit our online components portal at /legacy-parts."
3. If they indicate a large-scale project, resort, wedding venue, or major estate, upgrade their status to Priority 1. Tell them: "Your vision aligns perfectly with our bespoke engineering portfolio. I highly recommend a private consultation with our principal engineer to discuss site logistics and design aesthetics."
4. If they ask to book or seem highly qualified, provide the calendar link: "I have authorized priority scheduling for your project. Please select a time at your earliest convenience: https://calendly.com/midwest-windmill/vip-consultation"
5. Do not overwhelm them with long paragraphs. Keep responses elegant, concise, and focused on guiding them to a formal consultation.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { history, message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Set headers for Server-Sent Events (SSE)
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Format history for the model
    // The model expects an array of { role: 'user' | 'model', parts: [{ text: ... }] } 
    // Wait, the new @google/genai SDK format for contents:
    const contents = (history || []).map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    // Add the current message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        // SSE format: data: JSON_STRING\n\n
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Chat API Error:', error);
    // Send error chunk if headers are already sent, else send 500
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Internal Server Error' })}\n\n`);
      res.end();
    }
  }
}
