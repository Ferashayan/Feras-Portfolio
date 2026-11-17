"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatWidgetProps {
  context: string;
  suggestedQuestions: string[];
  initialMessage?: string;
  title?: string;
}

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

export function ChatWidget({
  context,
  suggestedQuestions,
  initialMessage,
  title = "AI Agent",
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>(
    initialMessage ? [{ id: "init-0", role: "ai", content: initialMessage }] : []
  );
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgCounterRef = useRef(1);

  useEffect(() => {
    if (hasInteracted) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, hasInteracted]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setHasInteracted(true);
    const userMsg: Message = {
      id: `msg-${msgCounterRef.current++}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, context }),
      });
      const data = await res.json();

      const aiMsg: Message = {
        id: `msg-${msgCounterRef.current++}`,
        role: "ai",
        content: data.text || "No response returned.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errorMsg: Message = {
        id: `msg-${msgCounterRef.current++}`,
        role: "ai",
        content: "Failed to fetch response.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="h-full border border-neutral-800 bg-neutral-900/50 rounded-xl overflow-hidden flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-neutral-800 bg-neutral-900 shrink-0">
        <div className="flex items-center gap-2 text-indigo-400">
          <Bot size={18} />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {title}
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-500">Ask anything</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col max-h-[300px]">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.2)]"
                    : "bg-neutral-800 text-neutral-200 border border-neutral-700"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-3 flex gap-1 items-center h-10">
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-neutral-800 bg-neutral-900 shrink-0">
        {!hasInteracted && suggestedQuestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(q)}
                className="text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-1.5 px-3 rounded-full border border-neutral-700 transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about this work..."
            aria-label={`Ask AI agent about ${title}`}
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            aria-label={`Send question to ${title}`}
            disabled={!inputValue.trim() || isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors flex-shrink-0"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}


