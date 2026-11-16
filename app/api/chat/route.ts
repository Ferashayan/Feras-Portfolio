import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are the AI Assistant representing an AI Engineer and Full-Stack SaaS Developer. 
Your goal is to answer questions about their portfolio projects and ML models.
Keep your answers concise, professional, and directly related to the user's question and the specific context provided.
Do not hallucinate technical details; if you don't know the exact answer, explain the likely approach an expert AI Engineer would take based on the project description.
`;

export async function POST(req: NextRequest) {
  try {
    const { message, context } = await req.json();

    const prompt = `
${SYSTEM_PROMPT}

Context about the specific project/model the user is asking about:
${context}

User's Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { text: "I'm currently offline or experiencing an error. Please reach out via email for more details!" },
      { status: 500 }
    );
  }
}
