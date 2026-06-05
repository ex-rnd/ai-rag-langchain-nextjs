import {
  StreamingTextResponse,
  createStreamDataTransformer
} from "ai";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const message = messages.at(-1).content;

    const prompt = PromptTemplate.fromTemplate("{message}");

    const model = new ChatOpenAI({
      apiKey: "ollama",
      model: "qwen2.5:0.5b", // or qwen2.5:0.5b-instruct / mistral
      temperature: 0.8,
      configuration: {
        baseURL: process.env.OLLAMA_URL,
      },
    });

    const parser = new HttpResponseOutputParser();

    const chain = RunnableSequence.from([
      prompt as any,
      model as any,
      parser as any,
    ]);

    const stream = await chain.stream({ message });

    return new StreamingTextResponse(
      stream.pipeThrough(createStreamDataTransformer())
    );
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
