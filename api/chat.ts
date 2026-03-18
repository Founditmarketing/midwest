import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'MISSING_API_KEY' });

const SYSTEM_INSTRUCTION = `You are the Executive Assistant to the Founder of Midwest Windmill. Your goal is to qualify leads. 
1. If an inquiry mentions "Resort", "Wedding", or "Famous", immediately flag this as Priority 1 and trigger a personal calendar link. Say explicitly: "Your project aligns perfectly with our elite commissions. I have authorized a Priority 1 private consultation suite with our principal engineer. Please select a time here: https://calendly.com/midwest-windmill/vip-consultation"
2. ALL other inquiries (even if they mention new installations but don't meet the Priority 1 threshold, or are asking for parts, general information, or any other query) get an automated "Resource Guide" PDF and are filtered to a low-priority bucket. Say: "We are currently allocating our engineering resources exclusively to top-tier commercial and heritage estate commissions. For your inquiry, please review our comprehensive resources here: [Download Midwest Windmill Resource Guide](/resource-guide.pdf). If you require legacy parts or DIY support, visit our portal at /legacy-parts."
3. Maintain an air of 'exclusive availability.' We are not a shop; we are a specialized service.
Act as a High-End Concierge for Midwest Windmill, a premier heritage engineering firm. Our clients are luxury estate owners, famous individuals, and world-class resorts.
Your Tone: Professional, exclusive, authoritative, and fiercely protective of the owner's time.
The 'Midwest' Pitch: Emphasize that we 'preserve the past and power the future' using modern safety tech and innovation that 'Great Plains' simply doesn't offer.
Constraint: Never give pricing for custom installs. Never book calls for anything that isn't Priority 1. Always redirect low-priority to the Resource Guide.`;

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
      model: 'gemini-3-flash-preview',
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
