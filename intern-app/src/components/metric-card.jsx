"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./tilt-card";

// Removed TypeScript interface and type annotations
export function MetricCard({ title, value, suffix, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <TiltCard className="p-6 h-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#6b21a8]">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {title}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              className="text-5xl lg:text-6xl font-bold text-[#6b21a8]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              {value}
            </motion.span>
            {suffix && (
              <span className="text-xl lg:text-2xl font-semibold text-[#a855f7]">
                {suffix}
              </span>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
