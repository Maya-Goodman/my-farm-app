// app/buyerdashboard/purchases/page.js
"use client";

import GlassCard from "@/app/components/GlassCard";
import { BookText, Package, Calendar } from "lucide-react";

const dummyPurchases = [
  {
    orderId: "ORD001",
    date: "2024-07-01",
    total: 12.5,
    items: [
      { name: "Organic Tomatoes", quantity: 2, unit: "kg", price: 3.5 },
      { name: "Farm Fresh Eggs", quantity: 1, unit: "dozen", price: 4.0 },
    ],
    status: "Delivered",
  },
  {
    orderId: "ORD002",
    date: "2024-06-15",
    total: 5.7,
    items: [
      { name: "Potatoes (New Season)", quantity: 1, unit: "kg", price: 2.1 },
      { name: "Corn", quantity: 4, unit: "kg", price: 0.9 },
    ],
    status: "Completed",
  },
];

export default function PurchasesPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">My Purchases</h2>

      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <BookText size={24} className="mr-3" /> Order History
        </h3>
        {dummyPurchases.length === 0 ? (
          <p className="text-white text-lg opacity-80 text-center py-4">
            You have not made any purchases yet.
          </p>
        ) : (
          <div className="space-y-6">
            {dummyPurchases.map((order) => (
              <GlassCard
                key={order.orderId}
                className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="mb-4 sm:mb-0">
                  <p className="text-xl font-semibold text-white">
                    Order #{order.orderId}
                  </p>
                  <div className="flex items-center text-sm text-white opacity-80 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{order.date}</span>
                    <span className="ml-4 flex items-center">
                      <Package size={16} className="mr-2" /> Status:{" "}
                      {order.status}
                    </span>
                  </div>
                  <ul className="text-sm text-white opacity-90 mt-2 space-y-1">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} x {item.quantity} {item.unit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-300">
                    P{order.total.toFixed(2)}
                  </p>
                  <button className="mt-2 px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg hover:bg-opacity-20 transition-colors">
                    View Details
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
