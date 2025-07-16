import { useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Inline style for the animated gradient orbs
  const orbStyleBase = {
    position: "absolute",
    borderRadius: "9999px", // full rounded
    filter: "blur(3rem)", // blur-3xl
    opacity: "0.1",
    backgroundColor: "white",
  };

  const orb1Style = {
    ...orbStyleBase,
    width: "16rem", // w-64
    height: "16rem", // h-64
    top: "25%", // top-1/4
    left: "25%", // left-1/4
  };

  const orb2Style = {
    ...orbStyleBase,
    width: "20rem", // w-80
    height: "20rem", // h-80
    bottom: "25%", // bottom-1/4
    right: "25%", // right-1/4
  };

  return (
    <div
      className="flex h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #2a9d8f, #264653)", // blue-green gradients
      }}
    >
      {/* Animated Gradient Orbs - using raw style for animation via keyframes */}
      <style jsx>{`
        @keyframes gradientOrb1 {
          0% {
            transform: translate(0%, 0%) rotate(0deg);
          }
          25% {
            transform: translate(20%, 10%) rotate(45deg);
          }
          50% {
            transform: translate(0%, 20%) rotate(90deg);
          }
          75% {
            transform: translate(-20%, 10%) rotate(135deg);
          }
          100% {
            transform: translate(0%, 0%) rotate(180deg);
          }
        }
        @keyframes gradientOrb2 {
          0% {
            transform: translate(0%, 0%) rotate(0deg);
          }
          25% {
            transform: translate(-20%, -10%) rotate(-45deg);
          }
          50% {
            transform: translate(0%, -20%) rotate(-90deg);
          }
          75% {
            transform: translate(20%, -10%) rotate(-135deg);
          }
          100% {
            transform: translate(0%, 0%) rotate(-180deg);
          }
        }
      `}</style>
      <motion.div
        style={{
          ...orb1Style,
          animation: "gradientOrb1 15s ease infinite alternate",
        }}
        initial={{ x: "-50%", y: "-50%" }}
        animate={{ x: ["-50%", "0%", "-50%"], y: ["-50%", "0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        style={{
          ...orb2Style,
          animation: "gradientOrb2 18s ease infinite alternate",
        }}
        initial={{ x: "50%", y: "50%" }}
        animate={{ x: ["50%", "0%", "50%"], y: ["50%", "0%", "50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main
        className={`flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
