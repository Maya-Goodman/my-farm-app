// app/buyerdashboard/components/InteractedFarmers.js
import GlassCard from "@/app/components/GlassCard";
import { Handshake, Star, MapPin } from "lucide-react";

export default function InteractedFarmers({ farmers }) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-2xl font-bold text-white mb-6">
        <Handshake size={24} className="inline-block mr-2" /> Interacted Farmers
      </h3>
      <ul className="space-y-4">
        {farmers.map((farmer) => (
          <li
            key={farmer.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-lg border border-white border-opacity-20" // Removed background color
          >
            <div>
              <p className="text-lg text-white font-semibold">{farmer.name}</p>
              <div className="flex items-center text-sm text-white opacity-70 mt-1">
                <MapPin size={16} className="mr-2" />
                <span>{farmer.location}</span>
              </div>
            </div>
            <div className="flex items-center text-yellow-400 mt-2 sm:mt-0">
              <Star size={16} fill="currentColor" className="mr-1" />
              <span className="font-bold">{farmer.rating.toFixed(1)}</span>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
