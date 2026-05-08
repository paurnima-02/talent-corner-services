"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Building2, Globe, Target } from "lucide-react";

// Removed TypeScript interface and type annotations
export function SearchBar({ compact = false, onSearch, initialValues }) {
  const [industry, setIndustry] = useState(initialValues?.industry || "");
  const [country, setCountry] = useState(initialValues?.country || "");
  const [goal, setGoal] = useState(initialValues?.goal || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ industry, country, goal });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass rounded-2xl shadow-xl ${compact ? "p-3" : "p-6"}`}
      style={{
        transform: "perspective(1000px)",
      }}
    >
      <div
        className={`flex ${
          compact ? "flex-row gap-3" : "flex-col md:flex-row gap-4"
        } items-center`}
      >
        {/* Industry Input */}
        <div className={`relative ${compact ? "flex-1" : "flex-1 w-full"}`}>
          <Building2
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#6b21a8] ${
              compact ? "w-4 h-4" : "w-5 h-5"
            }`}
          />
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Industry"
            className={`w-full ${
              compact ? "pl-9 pr-3 py-2 text-sm" : "pl-11 pr-4 py-3"
            } bg-white/50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all placeholder:text-purple-300`}
          />
        </div>

        {/* Country Input */}
        <div className={`relative ${compact ? "flex-1" : "flex-1 w-full"}`}>
          <Globe
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#6b21a8] ${
              compact ? "w-4 h-4" : "w-5 h-5"
            }`}
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className={`w-full ${
              compact ? "pl-9 pr-3 py-2 text-sm" : "pl-11 pr-4 py-3"
            } bg-white/50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all placeholder:text-purple-300`}
          />
        </div>

        {/* User Goal Input */}
        <div className={`relative ${compact ? "flex-1" : "flex-1 w-full"}`}>
          <Target
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#6b21a8] ${
              compact ? "w-4 h-4" : "w-5 h-5"
            }`}
          />
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="User Goal"
            className={`w-full ${
              compact ? "pl-9 pr-3 py-2 text-sm" : "pl-11 pr-4 py-3"
            } bg-white/50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all placeholder:text-purple-300`}
          />
        </div>

        {/* Search Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-[#6b21a8] text-white ${
            compact ? "px-4 py-2" : "px-8 py-3"
          } rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:bg-[#581c87] transition-colors`}
        >
          <Search className={compact ? "w-4 h-4" : "w-5 h-5"} />
          {!compact && <span>Search</span>}
        </motion.button>
      </div>
    </motion.form>
  );
}
