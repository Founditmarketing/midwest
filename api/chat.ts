import { GoogleGenAI } from '@google/genai';

export const config = {
  runtime: 'edge', // Use Edge Runtime for perfect Vercel native streaming
};

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

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined in Vercel. Please add it in the Vercel Dashboard Settings -> Environment Variables.');
    }

    const ai = new GoogleGenAI({ apiKey });

    const { history, message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    const contents = (history || []).map((msg: any) => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

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

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              const data = `data: ${JSON.stringify({ text: chunk.text })}\n\n`;
              controller.enqueue(new TextEncoder().encode(data));
            }
          }
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
        } catch (e: any) {
          console.error("Stream generation error:", e);
          const errorMsg = `data: ${JSON.stringify({ error: e.message || "Failed to generate AI response" })}\n\n`;
          controller.enqueue(new TextEncoder().encode(errorMsg));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal Server Error Check Vercel Logs' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
