"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import the Link component
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
  Leaf, // Added Leaf import here
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
  // Use window.location.pathname to determine the active item
  // This ensures the correct item is highlighted on page load/refresh
  const [activeItem, setActiveItem] = useState(() => {
    // Check if window is defined (client-side) before accessing pathname
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const foundItem = navItems.find((item) => item.href === currentPath);
      return foundItem ? foundItem.name : "Dashboard"; // Default to Dashboard if no match
    }
    return "Dashboard"; // Default for server-side render or initial state
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
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold text-white whitespace-nowrap flex items-center">
              {" "}
              {/* Added flex items-center */}
              <Leaf size={28} className="mr-2 text-green-400" />{" "}
              {/* Added Leaf icon */}
              Farm Smart
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-2 rounded-full transition-colors"
            style={{
              outline: "none",
              backgroundColor: "transparent",
              // Use pseudo-classes for hover as inline style doesn't support them directly for hover
              // This is usually handled by Tailwind's hover:bg-opacity-10
              // For inline, you'd need a JS event handler like onMouseEnter/onMouseLeave
              // For simplicity, we'll rely on Tailwind if it were enabled
            }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                {/* Use Next.js Link component */}
                <Link
                  href={item.href}
                  passHref
                  onClick={() => setActiveItem(item.name)} // Update active state on click
                  // Ensure motion.a is not used directly, wrap the content in motion.div or span
                  // Or, if using Framer Motion with Link, you'd compose them carefully:
                  // <motion.div whileHover="..." whileTap="...">
                  //   <Link href={item.href}><a>...</a></Link>
                  // </motion.div>
                  // For simplicity, we'll apply motion props directly to the Link for now
                  // (Framer Motion can animate the direct child of Link, which is an <a> tag)
                >
                  <motion.a
                    className={`flex items-center p-3 rounded-lg text-white transition-all duration-200 ${
                      activeItem === item.name ? "shadow-md" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeItem === item.name
                          ? "linear-gradient(to right, #2a9d8f, #264653)"
                          : "transparent",
                      // Redundant but good for wider browser support
                      background:
                        activeItem === item.name
                          ? "linear-gradient(to right, #2a9d8f, #264653)"
                          : "transparent",
                      // Tailwind's hover classes would be better here for consistency
                      // As inline style for hover requires JS listeners
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
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
                  </motion.a>
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
        <motion.div // This isn't a link, so motion.div is fine
          className="flex items-center p-3 rounded-lg text-white transition-colors"
          style={
            {
              /* No hover styles here for inline, requires JS or CSS */
            }
          }
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
              John Doe
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
