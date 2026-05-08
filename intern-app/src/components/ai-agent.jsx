"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const defaultMessage =
  "Based on your search criteria, the renewable energy sector in Germany shows strong growth potential with a projected CAGR of 12.3%. Key opportunities include solar panel manufacturing and wind turbine components.";

export function AIAgent({ message = defaultMessage }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-purple rounded-2xl p-4 glow-purple h-full flex flex-col"
      style={{
        border: "2px solid rgba(168, 85, 247, 0.4)",
        boxShadow:
          "0 0 30px rgba(168, 85, 247, 0.2), inset 0 0 30px rgba(168, 85, 247, 0.05)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6b21a8] to-[#a855f7] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-[#6b21a8]">AI Insights</span>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#a855f7] ml-auto"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-sm text-gray-700 leading-relaxed">
          {displayedText}
          {isTyping && <span className="typewriter-cursor" />}
        </p>
      </div>
    </motion.div>
  );
}
