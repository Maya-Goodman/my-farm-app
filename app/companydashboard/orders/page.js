// app/companydashboard/orders/page.js
"use client";

import { useState } from "react";
import GlassCard from "@/app/components/GlassCard";
import OrderHistoryTable from "../components/OrderHistoryTable";

const dummyCompanyOrders = [
  {
    orderId: "CO-001",
    date: "2025-07-10",
    totalAmount: 1500.0,
    status: "Delivered",
    items: [
      { name: "Organic Wheat", quantity: 1000, unit: "kg", pricePerUnit: 0.9 },
      { name: "Fertilizer", quantity: 500, unit: "kg", pricePerUnit: 0.5 },
    ],
    farmer: "Wheatland Farms",
  },
  {
    orderId: "CO-002",
    date: "2025-07-01",
    totalAmount: 750.0,
    status: "Processing",
    items: [
      {
        name: "Industrial Tomatoes",
        quantity: 500,
        unit: "kg",
        pricePerUnit: 1.5,
      },
    ],
    farmer: "SunHarvest Agro",
  },
  {
    orderId: "CO-003",
    date: "2025-06-20",
    totalAmount: 2000.0,
    status: "Shipped",
    items: [
      { name: "Bulk Eggs", quantity: 200, unit: "dozen", pricePerUnit: 3.2 },
      { name: "Corn Silage", quantity: 500, unit: "kg", pricePerUnit: 0.4 },
    ],
    farmer: "Happy Hen Co.",
  },
];

export default function CompanyOrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrderDetails = (orderId) => {
    const order = dummyCompanyOrders.find((o) => o.orderId === orderId);
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Company Orders</h2>

      {selectedOrder ? (
        // Display Order Details
        <GlassCard className="p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-[#333]">
              Order Details: {selectedOrder.orderId}
            </h3>
            <button
              onClick={handleCloseDetails}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
            >
              Back to Orders
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-700 mb-2">
                <strong className="font-semibold">Date:</strong>{" "}
                {selectedOrder.date}
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-semibold">Status:</strong>{" "}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedOrder.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : selectedOrder.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {selectedOrder.status}
                </span>
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-semibold">Farmer:</strong>{" "}
                {selectedOrder.farmer}
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                <strong className="font-semibold">Total Amount:</strong> P
                {selectedOrder.totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Summarized Items Card */}
          <GlassCard className="p-4 mb-6 bg-white bg-opacity-70 shadow-inner">
            <h4 className="text-xl font-bold text-[#333] mb-3">
              Items Overview
            </h4>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {selectedOrder.items.map((item, index) => (
                <li key={index} className="mb-1">
                  {item.name} - {item.quantity} {item.unit}
                </li>
              ))}
              {selectedOrder.items.length === 0 && (
                <li>No items found for this order.</li>
              )}
            </ul>
          </GlassCard>

          <h4 className="text-2xl font-bold text-[#333] mb-4">
            Detailed Items:
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Item</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Unit</th>
                  <th className="py-3 px-6 text-right">Price/Unit</th>
                  <th className="py-3 px-6 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {selectedOrder.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3 px-6 text-left">{item.quantity}</td>
                    <td className="py-3 px-6 text-left">{item.unit}</td>
                    <td className="py-3 px-6 text-right">
                      P{item.pricePerUnit?.toFixed(2) || "N/A"}
                    </td>
                    <td className="py-3 px-6 text-right">
                      P{(item.quantity * (item.pricePerUnit || 0)).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      ) : (
        // Display Order History Table
        <OrderHistoryTable
          orders={dummyCompanyOrders}
          onViewDetails={handleViewOrderDetails}
        />
      )}
    </>
  );
}
