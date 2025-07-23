"use client";

import { useState } from "react";
import Layout from "@/app/components/Layout";
import GlassCard from "@/app/components/GlassCard";
import { User, Bell, Lock, Mail, MapPin } from "lucide-react"; // Import MapPin icon
import { motion, AnimatePresence } from "framer-motion";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        {activeTab === "profile" && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              Profile Information
            </h4>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="John Doe"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #2a9d8f, #264653)",
                  "&:hover": {
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                Save Changes
              </button>
            </form>
          </motion.div>
        )}
        {activeTab === "farm-info" && ( // New Farm Information tab content
          <motion.div
            key="farm-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              Farm Information
            </h4>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="farm-name"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Farm Name
                </label>
                <input
                  type="text"
                  id="farm-name"
                  defaultValue="Green Acres Farm"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="farm-location"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Farm Location (Address)
                </label>
                <input
                  type="text"
                  id="farm-location"
                  defaultValue="123 Farm Road, Rural Town, State, 12345"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="farm-coordinates"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Farm Coordinates (Latitude, Longitude)
                </label>
                <input
                  type="text"
                  id="farm-coordinates"
                  defaultValue="34.0522, -118.2437" // Example coordinates
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #2a9d8f, #264653)",
                  "&:hover": {
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                Save Farm Information
              </button>
            </form>
          </motion.div>
        )}
        {activeTab === "notifications" && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              Notification Preferences
            </h4>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <label
                  htmlFor="email-notifs"
                  className="text-white text-lg cursor-pointer"
                >
                  Email Notifications
                </label>
                <input
                  type="checkbox"
                  id="email-notifs"
                  defaultChecked
                  className="h-6 w-12 appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out relative checked:bg-green-500"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    outline: "none",
                  }} // Hide default checkbox styles
                  onChange={(e) =>
                    (e.target.nextElementSibling.style.transform = e.target
                      .checked
                      ? "translateX(100%)"
                      : "translateX(0)")
                  }
                />
                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out pointer-events-none"></span>{" "}
                {/* This span will be the movable thumb, but inline styles don't easily allow sibling selectors for this. A more robust solution would be a dedicated toggle component. */}
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <label
                  htmlFor="sms-notifs"
                  className="text-white text-lg cursor-pointer"
                >
                  SMS Alerts
                </label>
                <input
                  type="checkbox"
                  id="sms-notifs"
                  className="h-6 w-12 appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out relative checked:bg-green-500"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    outline: "none",
                  }}
                  onChange={(e) =>
                    (e.target.nextElementSibling.style.transform = e.target
                      .checked
                      ? "translateX(100%)"
                      : "translateX(0)")
                  }
                />
                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out pointer-events-none"></span>
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <label
                  htmlFor="low-stock-alerts"
                  className="text-white text-lg cursor-pointer"
                >
                  Low Stock Alerts
                </label>
                <input
                  type="checkbox"
                  id="low-stock-alerts"
                  defaultChecked
                  className="h-6 w-12 appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out relative checked:bg-green-500"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    outline: "none",
                  }}
                  onChange={(e) =>
                    (e.target.nextElementSibling.style.transform = e.target
                      .checked
                      ? "translateX(100%)"
                      : "translateX(0)")
                  }
                />
                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out pointer-events-none"></span>
              </div>
              <button
                type="button"
                className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #2a9d8f, #264653)",
                  "&:hover": {
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        )}
        {activeTab === "security" && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              Security Settings
            </h4>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-white text-sm font-bold mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #2a9d8f, #264653)",
                  "&:hover": {
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                Change Password
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">Settings</h2>

      <GlassCard className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col space-y-2 lg:w-1/4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center p-3 rounded-lg text-white text-lg transition-all`}
            style={{
              backgroundColor:
                activeTab === "profile"
                  ? "linear-gradient(to right, #2a9d8f, #264653)" // active gradient
                  : "transparent",
              background:
                activeTab === "profile"
                  ? "linear-gradient(to right, #2a9d8f, #264653)" // active gradient (for compatibility)
                  : "transparent",
              boxShadow:
                activeTab === "profile"
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "none", // shadow-md
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" }, // hover:bg-white hover:bg-opacity-10
            }}
          >
            <User size={20} className="mr-3" /> Profile
          </button>
          <button
            onClick={() => setActiveTab("farm-info")} // New button for Farm Information
            className={`flex items-center p-3 rounded-lg text-white text-lg transition-all`}
            style={{
              backgroundColor:
                activeTab === "farm-info"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              background:
                activeTab === "farm-info"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              boxShadow:
                activeTab === "farm-info"
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "none",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <MapPin size={20} className="mr-3" /> Farm Information
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex items-center p-3 rounded-lg text-white text-lg transition-all`}
            style={{
              backgroundColor:
                activeTab === "notifications"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              background:
                activeTab === "notifications"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              boxShadow:
                activeTab === "notifications"
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "none",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <Bell size={20} className="mr-3" /> Notifications
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`flex items-center p-3 rounded-lg text-white text-lg transition-all`}
            style={{
              backgroundColor:
                activeTab === "security"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              background:
                activeTab === "security"
                  ? "linear-gradient(to right, #2a9d8f, #264653)"
                  : "transparent",
              boxShadow:
                activeTab === "security"
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "none",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <Lock size={20} className="mr-3" /> Security
          </button>
        </div>

        <div className="flex-1">{renderContent()}</div>
      </GlassCard>
    </Layout>
  );
}
