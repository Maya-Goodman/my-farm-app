// app/components/FloatingBubbles.js
"use client";

import React, { useEffect, useState, useRef } from "react";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const nextId = useRef(0); // To give unique keys to new bubbles

  // Function to generate a single bubble's properties
  const generateBubble = () => {
    const size = Math.random() * 40 + 20; // Bubbles between 20px and 60px
    const left = Math.random() * 100; // Random horizontal position
    const animationDuration = Math.random() * 10 + 5; // Animation between 5s and 15s
    const delay = Math.random() * 5; // Staggered start delay

    nextId.current += 1; // Increment for unique ID

    return {
      id: nextId.current, // Use a unique ID for React keys
      size,
      left,
      animationDuration,
      delay,
    };
  };

  useEffect(() => {
    // Initialize with a set number of bubbles
    // Add bubbles staggered to fill the screen initially
    for (let i = 0; i < 15; i++) {
      // Generate 15 initial bubbles
      setTimeout(() => {
        setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
      }, i * 500); // Stagger initial generation
    }

    // Set up an interval to add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
    }, 1000); // Add a new bubble every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handler for when a bubble's animation ends
  const handleAnimationEnd = (id) => {
    setBubbles((prevBubbles) =>
      prevBubbles.filter((bubble) => bubble.id !== id)
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-white opacity-20 rounded-full animate-bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: `- ${bubble.size}px`, // Start off-screen
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
          onAnimationEnd={() => handleAnimationEnd(bubble.id)} // This will trigger when the animation finishes
        />
      ))}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh)
              translateX(
                ${Math.random() > 0.5 ? "" : "-"} ${Math.random() * 50}px
              )
              scale(1);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-iteration-count: 1; /* Each bubble animates once */
          animation-timing-function: linear;
          animation-fill-mode: forwards; /* Stays at end state (opacity 0) */
        }
      `}</style>
    </div>
  );
};

export default FloatingBubbles;
