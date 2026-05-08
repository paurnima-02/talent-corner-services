"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { TiltCard } from "./tilt-card";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const tradeRoutes = [
  { from: [-74.006, 40.7128], to: [2.3522, 48.8566] },
  { from: [139.6917, 35.6895], to: [-122.4194, 37.7749] },
  { from: [121.4737, 31.2304], to: [103.8198, 1.3521] },
  { from: [-0.1276, 51.5074], to: [77.209, 28.6139] },
  { from: [8.5417, 47.3769], to: [116.4074, 39.9042] },
];

const hubCities = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Shanghai", coordinates: [121.4737, 31.2304] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
];

export function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <TiltCard className="p-6">
        <h3 className="text-lg font-semibold text-[#6b21a8] mb-4">Global Trade Flow</h3>
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-white">
          <ComposableMap
            projectionConfig={{
              scale: 140,
              center: [20, 20],
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e9d5ff"
                    stroke="#c084fc"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#c084fc", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {tradeRoutes.map((route, index) => (
              <Line
                key={index}
                from={route.from}
                to={route.to}
                stroke="#6b21a8"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="4 2"
                style={{
                  opacity: 0.6,
                }}
              />
            ))}

            {hubCities.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <motion.circle
                  r={4}
                  fill="#6b21a8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
                <motion.circle
                  r={8}
                  fill="transparent"
                  stroke="#a855f7"
                  strokeWidth={1}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </TiltCard>
    </motion.div>
  );
}
