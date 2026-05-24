import React from "react";
import { useLocation } from "react-router-dom";

import { SearchBar } from "./components/search-bar";
import { AIAgent } from "./components/ai-agent";
import { WorldMap } from "./components/world-map";
import { EcosystemTable } from "./components/ecosystem-table";
import { IndustryPieChart } from "./components/industry-pie-chart";

export default function DashboardPage() {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const industry = queryParams.get("industry");
  const country = queryParams.get("country");
  const goal = queryParams.get("goal");

  return (

    <div className="min-h-screen bg-[#f6f3fb] p-6">

      {/* SEARCH BAR */}
      <SearchBar
        industry={industry}
        country={country}
        goal={goal}
      />

      {/* TOP METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">

        {/* CARD 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <p className="text-purple-700 font-bold text-lg">
            MARKET VALUE
          </p>

          <h1 className="text-6xl font-black text-purple-700 mt-4">
            $847B
          </h1>

        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <p className="text-purple-700 font-bold text-lg">
            CAGR
          </p>

          <h1 className="text-6xl font-black text-purple-700 mt-4">
            12.3%
          </h1>

        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <p className="text-purple-700 font-bold text-lg">
            ACTIVE HUBS
          </p>

          <h1 className="text-6xl font-black text-purple-700 mt-4">
            156
          </h1>

        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <p className="text-purple-700 font-bold text-lg">
            GROWTH RATE
          </p>

          <h1 className="text-6xl font-black text-purple-700 mt-4">
            8.7%
          </h1>

        </div>

        {/* AI INSIGHTS */}
        <AIAgent
          industry={industry}
          country={country}
          goal={goal}
        />

      </div>

      {/* MAP SECTION */}
      <div className="mt-8">

        <WorldMap />

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

        {/* TABLE */}
        <div className="lg:col-span-2">

          <EcosystemTable />

        </div>

        {/* PIE CHART */}
        <div>

          <IndustryPieChart />

        </div>

      </div>

    </div>
  );
}