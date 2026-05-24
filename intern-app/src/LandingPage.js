import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Sparkles,
  Search,
  Building2,
  Globe,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

function LandingPage() {

  const navigate = useNavigate();

  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [goal, setGoal] = useState("");

  const handleSearch = () => {

    navigate(
      `/dashboard?industry=${industry}&country=${country}&goal=${goal}`
    );

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-10">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 bg-purple-600 rounded-2xl shadow-lg">
          <Sparkles className="text-white w-7 h-7" />
        </div>

        <h1 className="text-3xl font-bold text-purple-700">
          Talent Corner Services
        </h1>
      </div>

      {/* Hero */}
      <div className="text-center">

        <h1 className="text-6xl md:text-8xl font-black leading-tight text-purple-700">
          Industry Research
          <br />

          <span className="text-purple-500">
            Made Intelligent
          </span>
        </h1>

        <p className="text-gray-600 text-xl mt-8 max-w-4xl mx-auto">
          Discover market insights, analyze industry trends,
          and unlock global opportunities with AI-powered
          research intelligence.
        </p>

        {/* Search Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 mt-14 max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Industry */}
            <div className="flex items-center gap-3 border border-purple-200 rounded-2xl px-5 py-4">

              <Building2 className="text-purple-600" />

              <input
                type="text"
                placeholder="Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full outline-none text-black placeholder-purple-300"
              />
            </div>

            {/* Country */}
            <div className="flex items-center gap-3 border border-purple-200 rounded-2xl px-5 py-4">

              <Globe className="text-purple-600" />

              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full outline-none text-black placeholder-purple-300"
              />
            </div>

            {/* Goal */}
            <div className="flex items-center gap-3 border border-purple-200 rounded-2xl px-5 py-4">

              <Target className="text-purple-600" />

              <input
                type="text"
                placeholder="User Goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full outline-none text-black placeholder-purple-300"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-purple-700 hover:bg-purple-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all py-4 shadow-xl"
            >
              <Search className="w-5 h-5" />
              Search
            </button>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-left">

            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-purple-700 w-8 h-8" />
            </div>

            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Market Analysis
            </h2>

            <p className="text-gray-600 text-lg">
              Real-time market data and growth projections.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-left">

            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="text-purple-700 w-8 h-8" />
            </div>

            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Global Reach
            </h2>

            <p className="text-gray-600 text-lg">
              Access insights from markets worldwide.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-left">

            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-purple-700 w-8 h-8" />
            </div>

            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Industry Networks
            </h2>

            <p className="text-gray-600 text-lg">
              Connect with key players and stakeholders.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;