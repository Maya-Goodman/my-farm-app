// app/companydashboard/components/CompanySidebar.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter

import {
  Menu,
  X,
  Building,
  Box,
  ShoppingCart,
  ReceiptText,
  Users,
  Settings,
  Package, // Assuming this is for Company Profile/details, otherwise consider a User icon for profile
  LogOut, // Import LogOut icon
} from "lucide-react";

const companyNavItems = [
  { name: "Company Dashboard", icon: Building, href: "/companydashboard" },
  {
    name: "Bulk Products",
    icon: ShoppingCart,
    href: "/companydashboard/products",
  },
  { name: "Orders", icon: ReceiptText, href: "/companydashboard/orders" },
  { name: "Farmers Network", icon: Users, href: "/companydashboard/farmers" },
  { name: "Settings", icon: Settings, href: "/companydashboard/settings" },
];

export default function CompanySidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const currentPath = usePathname();
  const router = useRouter(); // Initialize useRouter

  const [activeItem, setActiveItem] = useState(() => {
    const foundItem = companyNavItems.find((item) =>
      currentPath.startsWith(item.href)
    );
    return foundItem ? foundItem.name : "Company Dashboard";
  });

  const glassEffectStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Lighter glassmorphism
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };

  const handleLogout = () => {
    // In a real application, you would also clear authentication tokens/session here
    console.log("Company logging out...");
    router.push("/login"); // Redirect to the login page
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
            <h1 className="text-2xl font-bold text-[#333] whitespace-nowrap flex items-center">
              <Building size={28} className="mr-2 text-blue-600" />
              AgriCorp
            </h1>
          ) : (
            <Building size={28} className="text-blue-600" />
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[#333] p-2 rounded-full transition-colors"
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
            {companyNavItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} passHref>
                  <motion.div
                    className={`flex items-center p-3 rounded-lg text-[#333] transition-all duration-200 ${
                      currentPath === item.href ||
                      (item.href !== "/companydashboard" &&
                        currentPath.startsWith(item.href))
                        ? "shadow-md"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        currentPath === item.href ||
                        (item.href !== "/companydashboard" &&
                          currentPath.startsWith(item.href))
                          ? "rgba(0, 0, 0, 0.1)" // Darker transparent background for active
                          : "transparent",
                      color:
                        currentPath === item.href ||
                        (item.href !== "/companydashboard" &&
                          currentPath.startsWith(item.href))
                          ? "#fff" // White text for active
                          : "#333", // Dark text for inactive
                      background:
                        currentPath === item.href ||
                        (item.href !== "/companydashboard" &&
                          currentPath.startsWith(item.href))
                          ? "linear-gradient(to right, #4CAF50, #2E7D32)" // Green gradient for active
                          : "transparent",
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveItem(item.name)}
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
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
      >
        {/* Company Profile display */}
        <motion.div
          className="flex items-center p-3 rounded-lg text-[#333] transition-colors mb-2" // Added mb-2 for spacing
          whileHover={{
            scale: 1.02,
            x: 5,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Package size={20} className="shrink-0" />{" "}
          {/* Or User icon if preferred for profile */}
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="ml-4 whitespace-nowrap"
            >
              Company Profile
            </motion.span>
          )}
        </motion.div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-3 rounded-lg text-white transition-all duration-200"
          style={{
            background: "linear-gradient(to right, #ef4444, #dc2626)", // Red gradient for logout
            boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
          }}
          whileHover={{
            scale: 1.02,
            x: 5,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut size={20} className="shrink-0" />
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="ml-4 whitespace-nowrap"
            >
              Log Out
            </motion.span>
          )}
        </button>
      </div>
    </motion.div>
  );
}
