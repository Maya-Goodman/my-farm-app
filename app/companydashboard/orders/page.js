// app/companydashboard/orders/page.js
"use client";

import OrderHistoryTable from "../components/OrderHistoryTable";

const dummyCompanyOrders = [
  {
    orderId: "CO-001",
    date: "2025-07-10",
    totalAmount: 1500.0,
    status: "Delivered",
    items: [{ name: "Organic Wheat", quantity: 1000, unit: "kg" }],
    farmer: "Wheatland Farms",
  },
  {
    orderId: "CO-002",
    date: "2025-07-01",
    totalAmount: 750.0,
    status: "Processing",
    items: [{ name: "Industrial Tomatoes", quantity: 500, unit: "kg" }],
    farmer: "SunHarvest Agro",
  },
  {
    orderId: "CO-003",
    date: "2025-06-20",
    totalAmount: 2000.0,
    status: "Shipped",
    items: [
      { name: "Bulk Eggs", quantity: 200, unit: "dozen" },
      { name: "Corn Silage", quantity: 500, unit: "kg" },
    ],
    farmer: "Happy Hen Co.",
  },
];

export default function CompanyOrdersPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Company Orders</h2>
      <OrderHistoryTable orders={dummyCompanyOrders} />
    </>
  );
}
