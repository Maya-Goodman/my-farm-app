"use client"; // Add this line at the very top

import Layout from "../components/Layout";
import GlassCard from "../components/GlassCard";
import {
  Droplets,
  Thermometer,
  Cloud,
  CheckCircle,
  AlertTriangle,
  Leaf,
  Users,
  TrendingUp, // For market trends
  DollarSign, // For sales figures
  Truck, // For deliveries
  Package, // For products sold
} from "lucide-react"; // Make sure to import all new icons
import { motion } from "framer-motion";

export default function Dashboard() {
  // Existing farm statistics
  const stats = [
    {
      title: "Temperature",
      value: "25°C",
      icon: Thermometer,
      color: "text-red-400",
    },
    { title: "Humidity", value: "60%", icon: Droplets, color: "text-blue-300" },
    {
      title: "Soil Moisture",
      value: "75%",
      icon: Leaf,
      color: "text-green-300",
    },
    {
      title: "Tasks Completed",
      value: "12/15",
      icon: CheckCircle,
      color: "text-emerald-300",
    },
    {
      title: "Low Stock Items",
      value: "3",
      icon: AlertTriangle,
      color: "text-yellow-300",
    },
    { title: "Farm Hands", value: "8", icon: Users, color: "text-purple-300" },
  ];

  // New data for sales overview
  const salesOverview = [
    {
      title: "Total Sales (Month)",
      value: "P 15,200",
      icon: DollarSign,
      color: "text-lime-300",
    },
    {
      title: "Products Sold (Units)",
      value: "850",
      icon: Package,
      color: "text-sky-300",
    },
    {
      title: "Pending Deliveries",
      value: "5",
      icon: Truck,
      color: "text-orange-300",
    },
    {
      title: "Top Product (Month)",
      value: "Organic Tomatoes",
      icon: Leaf,
      color: "text-emerald-300",
    },
  ];

  // Data for recent sales transactions
  const recentSales = [
    {
      id: 1,
      product: "Organic Tomatoes",
      quantity: "50kg",
      revenue: "P 500",
      date: "2025-07-14",
    },
    {
      id: 2,
      product: "Farm Fresh Eggs",
      quantity: "20 dozen",
      revenue: "P 300",
      date: "2025-07-13",
    },
    {
      id: 3,
      product: "Wheat Grains",
      quantity: "100kg",
      revenue: "P 800",
      date: "2025-07-12",
    },
    {
      id: 4,
      product: "Potatoes",
      quantity: "80kg",
      revenue: "P 400",
      date: "2025-07-11",
    },
    {
      id: 5,
      product: "Bell Peppers",
      quantity: "30kg",
      revenue: "P 250",
      date: "2025-07-10",
    },
  ];

  // Data for market trends (simplified for display)
  const marketTrends = [
    {
      product: "Organic Tomatoes",
      trend: "Up",
      change: "+2.5%",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      product: "Wheat Grains",
      trend: "Stable",
      change: "0%",
      icon: TrendingUp,
      color: "text-yellow-400",
    },
    {
      product: "Farm Fresh Eggs",
      trend: "Down",
      change: "-1.0%",
      icon: TrendingUp,
      color: "text-red-400",
    },
    {
      product: "Potatoes",
      trend: "Up",
      change: "+1.5%",
      icon: TrendingUp,
      color: "text-green-400",
    },
  ];

  const farmConditions = [
    {
      title: "Current Temp",
      value: "25.3°C",
      icon: Thermometer,
      color: "text-red-300",
    },
    { title: "Humidity", value: "62%", icon: Droplets, color: "text-blue-300" },
    {
      title: "Soil Moisture",
      value: "78%",
      icon: Leaf,
      color: "text-green-300",
    },
    { title: "Weather", value: "Sunny", icon: Cloud, color: "text-gray-300" },
  ];

  const recentActivities = [
    {
      id: 1,
      text: "Irrigation system checked in Field A",
      time: "10 mins ago",
    },
    { id: 2, text: "Harvested 200kg of tomatoes", time: "1 hour ago" },
    { id: 3, text: "Pest control applied to Orchard C", time: "3 hours ago" },
    { id: 4, text: "New fertilizer stock added", time: "yesterday" },
  ];

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">Dashboard Overview</h2>

      {/* --- Sales Overview Section --- */}
      <h3 className="text-3xl font-bold text-white mb-6">
        Produce Sales & Deliveries
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {salesOverview.map((stat, index) => (
          <GlassCard key={index} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-full ${stat.color}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                marginRight: "1rem",
              }}
            >
              <stat.icon size={28} />
            </motion.div>
            <div>
              <p className="text-white text-lg" style={{ opacity: 0.8 }}>
                {stat.title}
              </p>
              <h3 className="text-white text-3xl font-semibold">
                {stat.value}
              </h3>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* --- Recent Sales Transactions --- */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Recent Sales Transactions
          </h3>
          <ul
            className="divide-y"
            style={{
              borderTop: "none",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            {recentSales.length === 0 ? (
              <li
                className="text-white text-center py-4"
                style={{ opacity: 0.8 }}
              >
                No recent sales.
              </li>
            ) : (
              recentSales.map((sale) => (
                <li
                  key={sale.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3"
                  style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
                >
                  <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">
                      {sale.product}
                    </p>
                    <span
                      className="text-white text-sm"
                      style={{ opacity: 0.7 }}
                    >
                      {sale.quantity} on {sale.date}
                    </span>
                  </div>
                  <span className="text-white text-xl font-bold mt-2 sm:mt-0">
                    {sale.revenue}
                  </span>
                </li>
              ))
            )}
          </ul>
        </GlassCard>

        {/* --- Market Trends --- */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Market Trends (Key Produce)
          </h3>
          <ul className="space-y-3">
            {marketTrends.map((trend, index) => (
              <motion.li
                key={index}
                className="flex items-center p-3 rounded-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <trend.icon size={24} className={`${trend.color} mr-3`} />
                <div className="flex-1">
                  <p className="text-white text-lg font-semibold">
                    {trend.product}
                  </p>
                  <p className="text-white text-sm" style={{ opacity: 0.8 }}>
                    {trend.trend}{" "}
                    <span className="font-bold">{trend.change}</span>
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* --- Farm Operations & Conditions --- */}
      <h3 className="text-3xl font-bold text-white mb-6">
        Farm Operations & Conditions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <GlassCard key={index} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-full ${stat.color}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                marginRight: "1rem",
              }}
            >
              <stat.icon size={28} />
            </motion.div>
            <div>
              <p className="text-white text-lg" style={{ opacity: 0.8 }}>
                {stat.title}
              </p>
              <h3 className="text-white text-3xl font-semibold">
                {stat.value}
              </h3>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* --- Detailed Farm Conditions --- */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Detailed Farm Conditions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {farmConditions.map((condition, index) => (
              <div
                key={index}
                className="p-4 rounded-lg flex items-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <condition.icon
                  size={24}
                  className={`${condition.color} mr-3`}
                />
                <div>
                  <p className="text-white text-sm" style={{ opacity: 0.8 }}>
                    {condition.title}
                  </p>
                  <p className="text-white text-xl font-bold">
                    {condition.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* --- Recent Activities --- */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Recent Activities
          </h3>
          <ul>
            {recentActivities.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center py-2"
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
              >
                <p className="text-white" style={{ opacity: 0.9 }}>
                  {activity.text}
                </p>
                <span className="text-white text-sm" style={{ opacity: 0.6 }}>
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Layout>
  );
}
