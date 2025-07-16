// app/buyerdashboard/farmers/page.js
"use client";

import GlassCard from "@/app/components/GlassCard";
import { Handshake, Star, MapPin } from "lucide-react";
import InteractedFarmers from "../components/InteractedFarmers";// Re-use the component

const initialFarmers = [
  {
    id: 101,
    name: "Green Valley Farms",
    location: "Rural Area A",
    rating: 4.8,
  },
  { id: 102, name: "Sunny Side Farm", location: "Valley Town", rating: 4.5 },
  {
    id: 103,
    name: "Ridgeview Produce",
    location: "Mountain Pass",
    rating: 4.2,
  },
  { id: 104, name: "Golden Fields Co.", location: "Flatlands", rating: 4.0 },
];

export default function FarmersPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">My Farmers</h2>

      {/* Re-using the InteractedFarmers component */}
      <InteractedFarmers farmers={initialFarmers} />

      {/* You could add more specific farmer details here, e.g., a list with more info */}
      <GlassCard className="mt-6 p-6">
        <h3 className="text-2xl font-bold text-white mb-6">
          All Connected Farmers
        </h3>
        <ul className="space-y-4">
          {initialFarmers.map((farmer) => (
            <li
              key={farmer.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white bg-opacity-10 p-3 rounded-lg"
            >
              <div>
                <p className="text-lg text-white font-semibold">
                  {farmer.name}
                </p>
                <div className="flex items-center text-sm text-white opacity-70 mt-1">
                  <MapPin size={16} className="mr-2" />
                  <span>{farmer.location}</span>
                </div>
              </div>
              <div className="flex items-center text-yellow-400 mt-2 sm:mt-0">
                <Star size={16} fill="currentColor" className="mr-1" />
                <span className="font-bold">{farmer.rating.toFixed(1)}</span>
                <button className="ml-4 px-3 py-1 bg-white bg-opacity-10 text-white text-sm rounded-md hover:bg-opacity-20 transition-colors">
                  View Profile
                </button>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </>
  );
}
