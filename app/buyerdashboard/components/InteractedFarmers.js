"use client";

import React from "react";
import GlassCard from "@/app/components/GlassCard";
import { Handshake, Star } from "lucide-react";

export default function InteractedFarmers({ farmers }) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Handshake size={24} className="mr-3" /> Interacted Farmers
      </h3>
      {farmers.length === 0 ? (
        <p className="text-white text-lg opacity-80 text-center py-4">
          No interacted farmers yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {farmers.map((farmer) => (
            <li
              key={farmer.id}
              className="flex justify-between items-center bg-white bg-opacity-10 p-3 rounded-lg"
            >
              <div>
                <p className="text-lg text-white font-semibold">
                  {farmer.name}
                </p>
                <p className="text-sm text-white opacity-70">
                  {farmer.location}
                </p>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star size={16} fill="currentColor" className="mr-1" />
                <span className="font-bold">{farmer.rating.toFixed(1)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
}
