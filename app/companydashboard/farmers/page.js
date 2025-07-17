// app/companydashboard/farmers/page.js
"use client";

import GlassCard from "@/app/components/GlassCard";
import { Users, Building, Phone, Mail, Star } from "lucide-react";

const dummyFarmersNetwork = [
  {
    id: 101,
    name: "Wheatland Farms",
    contact: "John Doe",
    phone: "123-456-7890",
    email: "john@wheatland.com",
    rating: 4.8,
    specialization: "Grains, Wheat",
  },
  {
    id: 102,
    name: "SunHarvest Agro",
    contact: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@sunharvest.com",
    rating: 4.5,
    specialization: "Vegetables, Tomatoes",
  },
  {
    id: 103,
    name: "Happy Hen Co.",
    contact: "Bob Johnson",
    phone: "555-123-4567",
    email: "bob@happyhen.com",
    rating: 4.7,
    specialization: "Dairy & Eggs, Poultry",
  },
  {
    id: 104,
    name: "Ridgeview Supply",
    contact: "Alice Brown",
    phone: "111-222-3333",
    email: "alice@ridgeview.com",
    rating: 4.2,
    specialization: "Root Vegetables, Potatoes",
  },
];

export default function CompanyFarmersPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Farmers Network</h2>

      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-[#333] mb-6 flex items-center">
          <Users size={24} className="mr-3" /> Our Partner Farmers
        </h3>
        {dummyFarmersNetwork.length === 0 ? (
          <p className="text-gray-700 text-lg text-center py-4">
            No farmers in your network yet.
          </p>
        ) : (
          <div className="space-y-6">
            {dummyFarmersNetwork.map((farmer) => (
              <GlassCard
                key={farmer.id}
                className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="mb-4 sm:mb-0">
                  <p className="text-xl font-semibold text-[#333] flex items-center">
                    <Building size={20} className="mr-2 text-blue-600" />{" "}
                    {farmer.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact: {farmer.contact}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Phone size={16} className="mr-2" /> {farmer.phone}
                    <Mail size={16} className="ml-4 mr-2" /> {farmer.email}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Specialization: {farmer.specialization}
                  </p>
                </div>
                <div className="text-right flex items-center">
                  <Star
                    size={20}
                    fill="currentColor"
                    className="text-yellow-500 mr-2"
                  />
                  <span className="text-lg font-bold text-[#333]">
                    {farmer.rating.toFixed(1)}
                  </span>
                  <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </GlassCard>
    </>
  );
}
