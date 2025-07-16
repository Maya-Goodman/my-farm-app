// app/buyerdashboard/wishlist/page.js
"use client";

import { useState } from "react";
import GlassCard from "@/app/components/GlassCard";
import Wishlist from "../components/Wishlist"; // Adjust path for components
import { HeartOff, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Dummy initial wishlist for this page's demonstration
const initialWishlistItems = [
  {
    id: 1,
    name: "Organic Tomatoes",
    stock: 150,
    unit: "kg",
    category: "Vegetables",
    price: 3.5,
    farmerId: 101,
    farmerName: "Green Valley Farms",
    imageUrl: "/images/tomato.jpeg",
  },
  {
    id: 4,
    name: "Potatoes (New Season)",
    stock: 200,
    unit: "kg",
    category: "Vegetables",
    price: 2.1,
    farmerId: 103,
    farmerName: "Ridgeview Produce",
    imageUrl: "/images/potato.jpeg",
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
    showNotification("Item removed from wishlist.", "info");
  };

  const handleAddToCartFromWishlist = (product) => {
    // In a real app, this would add to a global cart state/context
    showNotification(`${product.name} added to cart! (Simulated)`, "success");
    // Optionally remove from wishlist after adding to cart
    handleRemoveFromWishlist(product.id);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">My Wishlist</h2>

      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white flex items-center z-[100] ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "info"
              ? "bg-blue-500"
              : "bg-red-500"
          }`}
        >
          {notification.message}
        </motion.div>
      )}

      <Wishlist
        wishlist={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCartFromWishlist={handleAddToCartFromWishlist}
      />
    </>
  );
}
