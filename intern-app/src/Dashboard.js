import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Globe, Users } from "lucide-react";
import { SearchBar } from "./components/search-bar";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSearch = (data) => {
    const params = new URLSearchParams();

    if (data.industry) params.set("industry", data.industry);
    if (data.country) params.set("country", data.country);
    if (data.goal) params.set("goal", data.goal);

    navigate(`/dashboard?${params.toString()}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-purple-100" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold text-purple-900">
              Talent Corner Services
            </span>
          </div>
        </motion.header>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-purple-900">
                Industry Research
              </span>

              <br />

              <span className="text-purple-600">
                Made Intelligent
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover market insights, analyze industry trends,
              and unlock global opportunities with AI-powered
              research intelligence.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mx-auto mb-16">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <FeatureCard
              icon={TrendingUp}
              title="Market Analysis"
              description="Real-time market data and growth projections"
            />

            <FeatureCard
              icon={Globe}
              title="Global Reach"
              description="Access insights from markets worldwide"
            />

            <FeatureCard
              icon={Users}
              title="Industry Networks"
              description="Connect with key players and stakeholders"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-purple-100 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-700" />
      </div>

      <h3 className="text-lg font-semibold text-purple-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}