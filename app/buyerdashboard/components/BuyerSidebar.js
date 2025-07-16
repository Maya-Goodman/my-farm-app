"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook

import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Handshake,
  CloudSun,
  BookText,
  User,
  Leaf,
  LayoutDashboard,
} from "lucide-react";

const buyerNavItems = [
  { name: "Buyer Dashboard", icon: LayoutDashboard, href: "/buyerdashboard" },
  { name: "Shop Products", icon: ShoppingCart, href: "/buyerdashboard/shop" },
  { name: "My Wishlist", icon: Heart, href: "/buyerdashboard/wishlist" },
  { name: "My Purchases", icon: BookText, href: "/buyerdashboard/purchases" },
  { name: "My Farmers", icon: Handshake, href: "/buyerdashboard/farmers" },
  { name: "Weather (Buyer)", icon: CloudSun, href: "/buyerdashboard/weather" },
];

export default function BuyerSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const currentPath = usePathname(); // Get current path using usePathname hook

  const [activeItem, setActiveItem] = useState(() => {
    // Determine active item based on currentPath
    const foundItem = buyerNavItems.find((item) =>
      currentPath.startsWith(item.href)
    );
    return foundItem ? foundItem.name : "Buyer Dashboard";
  });

  const glassEffectStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };

  return (
    <motion.div
      initial={false}
      animate={{ width: isSidebarOpen ? "16rem" : "4rem" }}
      transition={{ duration: 0.3 }}
      className="fixed h-full flex flex-col justify-between py-6 px-4 z-50 shadow-lg"
      style={glassEffectStyle}
    >
      <div>
        <div className="flex justify-between items-center mb-10">
          {isSidebarOpen ? (
            <h1 className="text-2xl font-bold text-white whitespace-nowrap flex items-center">
              <Leaf size={28} className="mr-2 text-blue-400" />
              Buyer Connect
            </h1>
          ) : (
            <Leaf size={28} className="text-blue-400" />
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-2 rounded-full transition-colors"
            style={{
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav>
          <ul>
            {buyerNavItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} passHref>
                  <motion.div // Apply motion to a div, not an 'a' tag
                    className={`flex items-center p-3 rounded-lg text-white transition-all duration-200 ${
                      currentPath === item.href ||
                      (item.href !== "/buyerdashboard" &&
                        currentPath.startsWith(item.href))
                        ? "shadow-md"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        currentPath === item.href ||
                        (item.href !== "/buyerdashboard" &&
                          currentPath.startsWith(item.href))
                          ? "linear-gradient(to right, #2a9d8f, #264653)"
                          : "transparent",
                      background:
                        currentPath === item.href ||
                        (item.href !== "/buyerdashboard" &&
                          currentPath.startsWith(item.href))
                          ? "linear-gradient(to right, #2a9d8f, #264653)"
                          : "transparent",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveItem(item.name)} // Keep onClick here to update active state
                  >
                    <item.icon size={20} className="shrink-0" />
                    {isSidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="ml-4 whitespace-nowrap"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="mt-auto pt-6"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <motion.div
          className="flex items-center p-3 rounded-lg text-white transition-colors"
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <User size={20} className="shrink-0" />
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="ml-4 whitespace-nowrap"
            >
              Jane Buyer
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
