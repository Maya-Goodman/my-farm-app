// app/companydashboard/layout.js
"use client";

import { useState } from "react";
import CompanySidebar from "./components/CompanySidebar";

export default function CompanyLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Background gradient for Company Dashboard (white gradient)
  const backgroundStyle = {
    background: "linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)", // Light gray to white gradient
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  // Glassmorphism effect styles (lighter for white background)
  const glassEffectTopRight = {
    position: "absolute",
    top: "0",
    right: "0",
    width: "350px",
    height: "350px",
    background: "rgba(255, 255, 255, 0.3)", // More opaque white for contrast
    backdropFilter: "blur(15px)",
    borderRadius: "50%",
    transform: "translate(40%, -40%)",
    zIndex: "0",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
  };

  const glassEffectBottomLeft = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "450px",
    height: "450px",
    background: "rgba(255, 255, 255, 0.2)", // Slightly less opaque
    backdropFilter: "blur(12px)",
    borderRadius: "50%",
    transform: "translate(-40%, 40%)",
    zIndex: "0",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  return (
    <div style={backgroundStyle}>
      {/* Glassmorphism background elements */}
      <div style={glassEffectTopRight}></div>
      <div style={glassEffectBottomLeft}></div>

      <div className="relative flex min-h-screen z-10">
        <CompanySidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main
          className={`flex-1 p-8 transition-all duration-300`}
          style={{
            marginLeft: isSidebarOpen ? "16rem" : "4rem", // Adjust content margin based on sidebar state
            color: "#333", // Default text color for contrast on white background
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
