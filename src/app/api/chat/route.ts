import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const openai = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY!,
    baseURL: process.env.OLLAMA_URL,   // e.g. http://localhost:11434/v1
    apiKey: "ollama",  
});

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        //model: 'gpt-3.5-turbo',
        model: 'qwen2.5:0.5b',
        stream: true,
        messages: messages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}