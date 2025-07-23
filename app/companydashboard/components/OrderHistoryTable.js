// app/companydashboard/components/OrderHistoryTable.js
"use client";

import GlassCard from "@/app/components/GlassCard"; // Assuming you have this component

export default function OrderHistoryTable({ orders, onViewDetails }) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-2xl font-bold text-[#333] mb-6">Order History</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Farmer</th>
              <th className="py-3 px-6 text-right">Total Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {order.orderId}
                </td>
                <td className="py-3 px-6 text-left">{order.date}</td>
                <td className="py-3 px-6 text-left">{order.farmer}</td>
                <td className="py-3 px-6 text-right">
                  ${order.totalAmount.toFixed(2)}
                </td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => onViewDetails(order.orderId)} // Call onViewDetails prop
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
