"use client";

import { useState } from "react";
import BuyerSidebar from "./components/BuyerSidebar"; // Import the new BuyerSidebar

export default function BuyerLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Background gradient styles (copied from your main layout for consistency)
  const backgroundStyle = {
    background: "linear-gradient(135deg, #264653 0%, #2a9d8f 100%)",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  // Radial gradient styles - now correctly including the background property
  const radialGradientTopRight = {
    position: "absolute",
    top: "0",
    right: "0",
    width: "300px",
    height: "300px",
    background:
      "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
    borderRadius: "50%",
    transform: "translate(50%, -50%)",
    zIndex: "0",
  };

  const radialGradientBottomLeft = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle at bottom left, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
    borderRadius: "50%",
    transform: "translate(-50%, 50%)",
    zIndex: "0",
  };

  return (
    <div style={backgroundStyle}>
      {/* Background gradients as div overlays (simulating pseudo-elements) */}
      <div
        // Use a single style prop to apply all necessary inline styles
        style={radialGradientTopRight}
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full translate-x-1/2 -translate-y-1/2 z-0"
      ></div>
      <div
        // Use a single style prop to apply all necessary inline styles
        style={radialGradientBottomLeft}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -translate-x-1/2 translate-y-1/2 z-0"
      ></div>

      <div className="relative flex min-h-screen z-10">
        <BuyerSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main
          className={`flex-1 p-8 transition-all duration-300`}
          style={{
            marginLeft: isSidebarOpen ? "16rem" : "4rem", // Adjust content margin based on sidebar state
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
