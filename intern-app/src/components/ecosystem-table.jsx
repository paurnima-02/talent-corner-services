"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./tilt-card";
import { Building, TrendingUp, Users, MapPin } from "lucide-react";

const ecosystemData = [
  { company: "Tesla Inc.", sector: "Electric Vehicles", growth: "+23.5%", employees: "127,855", location: "USA" },
  { company: "Siemens Gamesa", sector: "Wind Energy", growth: "+18.2%", employees: "26,000", location: "Spain" },
  { company: "BYD Company", sector: "Battery Tech", growth: "+31.4%", employees: "570,000", location: "China" },
  { company: "Vestas Wind", sector: "Wind Turbines", growth: "+15.8%", employees: "29,000", location: "Denmark" },
  { company: "First Solar", sector: "Solar Panels", growth: "+27.1%", employees: "7,000", location: "USA" },
];

export function EcosystemTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <TiltCard className="p-6">
        <h3 className="text-lg font-semibold text-[#6b21a8] mb-4 flex items-center gap-2">
          <Building className="w-5 h-5" />
          Industry Ecosystem
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-100">
                <th className="text-left py-3 px-2 text-sm font-semibold text-[#6b21a8]">Company</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[#6b21a8]">Sector</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[#6b21a8]">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Growth
                  </span>
                </th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[#6b21a8]">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Employees
                  </span>
                </th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-[#6b21a8]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ecosystemData.map((row, index) => (
                <motion.tr
                  key={row.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="border-b border-purple-50 hover:bg-purple-50/50 transition-colors"
                >
                  <td className="py-3 px-2 text-sm font-medium text-gray-800">{row.company}</td>
                  <td className="py-3 px-2 text-sm text-gray-600">{row.sector}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-green-600">{row.growth}</td>
                  <td className="py-3 px-2 text-sm text-gray-600">{row.employees}</td>
                  <td className="py-3 px-2 text-sm text-gray-600">{row.location}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </TiltCard>
    </motion.div>
  );
}
