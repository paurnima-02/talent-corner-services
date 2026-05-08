"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./tilt-card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { PieChartIcon } from "lucide-react";

const data = [
  { name: "Solar Energy", value: 35 },
  { name: "Wind Power", value: 28 },
  { name: "Battery Storage", value: 18 },
  { name: "Hydrogen", value: 12 },
  { name: "Other", value: 7 },
];

const COLORS = ["#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"];

export function IndustryPieChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <TiltCard className="p-6 h-full">
        <h3 className="text-lg font-semibold text-[#6b21a8] mb-4 flex items-center gap-2">
          <PieChartIcon className="w-5 h-5" />
          Market Distribution
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#6b21a8"
                    strokeWidth={1}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #e9d5ff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(107, 33, 168, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Share"]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </TiltCard>
    </motion.div>
  );
}
