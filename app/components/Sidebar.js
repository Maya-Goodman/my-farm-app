"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Boxes,
  CloudSun,
  ClipboardList,
  Package,
  Settings,
  User,
  Leaf,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/farmdashboard" },
  { name: "Product Management", icon: Boxes, href: "/farmdashboard/products" },
  { name: "Weather", icon: CloudSun, href: "/farmdashboard/weather" },
  { name: "Task Manager", icon: ClipboardList, href: "/farmdashboard/tasks" },
  {
    name: "Inventory Manager",
    icon: Package,
    href: "/farmdashboard/inventory",
  },
  { name: "Settings", icon: Settings, href: "/farmdashboard/settings" },
];

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundItem = navItems.find((item) => item.href === currentPath);
    if (foundItem) {
      setActiveItem(foundItem.name);
    } else {
      // Handle cases where currentPath doesn't directly match a navItem href
      const segments = currentPath.split("/");
      if (segments[1] === "farmdashboard") {
        if (segments[2] === "products") setActiveItem("Product Management");
        else if (segments[2] === "weather") setActiveItem("Weather");
        else if (segments[2] === "tasks") setActiveItem("Task Manager");
        else if (segments[2] === "inventory")
          setActiveItem("Inventory Manager");
        else if (segments[2] === "settings") setActiveItem("Settings");
        else if (segments[2] === undefined || segments[2] === "")
          setActiveItem("Dashboard");
      }
    }
  }, [router.asPath]); // Listen to route changes

  const handleLogout = () => {
    console.log("Logging out...");
    // In a real app, clear tokens, etc.
    router.push("/login");
  };

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
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold text-white whitespace-nowrap flex items-center">
              <Leaf size={28} className="mr-2 text-green-400" />
              Farm Smart
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-2 rounded-full transition-colors hover:bg-white hover:bg-opacity-10"
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
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                {/* Corrected Link usage for Framer Motion */}
                <Link href={item.href} className="block">
                  {" "}
                  {/* Apply Link to the outermost clickable block */}
                  <motion.div // motion.div is the direct child of Link
                    className={`flex items-center p-3 rounded-lg text-white transition-all duration-200 ${
                      activeItem === item.name ? "shadow-md" : ""
                    } hover:bg-white hover:bg-opacity-10`}
                    style={{
                      backgroundColor:
                        activeItem === item.name
                          ? "linear-gradient(to right, #2a9d8f, #264653)"
                          : "transparent",
                    }}
                    onClick={() => setActiveItem(item.name)} // Keep onClick here for immediate visual feedback
                    whileHover={{ scale: 1.02, x: isSidebarOpen ? 5 : 0 }}
                    whileTap={{ scale: 0.98 }}
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
          className="flex items-center p-3 rounded-lg text-white transition-colors mb-2"
          whileHover={{ scale: 1.02, x: isSidebarOpen ? 5 : 0 }}
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
              John Doe
            </motion.span>
          )}
        </motion.div>

        <button
          onClick={handleLogout}
          className={`flex items-center p-3 rounded-lg text-white transition-all duration-200 w-full text-left
            hover:bg-red-600 hover:bg-opacity-70`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <LogOut size={20} className="shrink-0" />
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="ml-4 whitespace-nowrap"
            >
              Logout
            </motion.span>
          )}
        </button>
      </div>
    </motion.div>
  );
}
