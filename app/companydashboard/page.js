// app/companydashboard/page.js
"use client";

import GlassCard from "@/app/components/GlassCard"; // Assuming GlassCard is in a shared components folder
import {
  Building,
  TrendingUp,
  Handshake,
  CalendarDays,
  ShoppingBag,
} from "lucide-react";

export default function CompanyDashboard() {
  // Dummy data for company metrics
  const totalSpend = 125000;
  const activeOrders = 15;
  const farmersConnected = 25;
  const nextDelivery = "2025-07-25";

  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Company Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Spend (YTD)</p>
            <p className="text-3xl font-bold text-green-700">
              ${totalSpend.toLocaleString()}
            </p>
          </div>
          <TrendingUp size={48} className="text-green-500 opacity-60" />
        </GlassCard>

        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Orders</p>
            <p className="text-3xl font-bold text-blue-700">{activeOrders}</p>
          </div>
          <ShoppingBag size={48} className="text-blue-500 opacity-60" />
        </GlassCard>

        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Farmers in Network</p>
            <p className="text-3xl font-bold text-purple-700">
              {farmersConnected}
            </p>
          </div>
          <Handshake size={48} className="text-purple-500 opacity-60" />
        </GlassCard>

        <GlassCard className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Next Scheduled Delivery</p>
            <p className="text-xl font-bold text-orange-700">{nextDelivery}</p>
          </div>
          <CalendarDays size={48} className="text-orange-500 opacity-60" />
        </GlassCard>
      </div>

      <GlassCard className="p-6 mb-8">
        <h3 className="text-2xl font-bold text-[#333] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
            Place New Bulk Order
          </button>
          <button className="p-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
            View All Orders
          </button>
          <button className="p-4 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
            Find New Farmers
          </button>
        </div>
      </GlassCard>

      {/* Placeholder for recent bulk orders or product recommendations */}
      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-[#333] mb-4">
          Recent Bulk Orders
        </h3>
        <p className="text-gray-700">
          Display a table of recent orders here...
        </p>
      </GlassCard>
    </>
  );
}
