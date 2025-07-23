// app/companydashboard/page.js
"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import GlassCard from "@/app/components/GlassCard";
import { TrendingUp, Handshake, CalendarDays, ShoppingBag } from "lucide-react";

export default function CompanyDashboard() {
  // State to control client-side rendering of bubbles
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set isClient to true after the component mounts on the client
  useEffect(() => {
    setIsClient(true);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Dummy data for company metrics
  const totalSpend = 125000;
  const activeOrders = 15;
  const farmersConnected = 25;
  const nextDelivery = "2025-07-25";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating Bubbles - Conditionally Rendered on Client */}
      {isClient && ( // Only render bubbles if isClient is true
        <div className="absolute inset-0 overflow-hidden -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              // Changed bg-blue-300 to bg-gray-300 for grey color
              // Increased base size for width/height random calculation
              className="absolute bg-gray-300 rounded-full opacity-30 animate-bubble"
              style={{
                width: `${Math.random() * 40 + 30}px`, // Increased range: 30px to 70px
                height: `${Math.random() * 40 + 30}px`, // Increased range: 30px to 70px
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
          <style jsx>{`
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 0.3;
              }
              100% {
                transform: translateY(-1000px) scale(1.5);
                opacity: 0;
              }
            }
            .animate-bubble {
              animation-name: bubble;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
          `}</style>
        </div>
      )}

      <div className="relative z-10 p-8">
        <h2 className="text-4xl font-bold text-[#333] mb-8">
          Company Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spend (YTD)</p>
              <p className="text-3xl font-bold text-green-700">
                P{totalSpend.toLocaleString()}
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
              <p className="text-xl font-bold text-orange-700">
                {nextDelivery}
              </p>
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
      </div>
    </div>
  );
}
