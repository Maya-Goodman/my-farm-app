"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/app/components/GlassCard"; // Path to GlassCard
import { Package, Heart, ShoppingCart } from "lucide-react";

export default function ProductCardBuyer({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) {
  const getStockColor = (stock) => {
    if (stock < 100) return "rgb(239 68 68)"; // red-500
    if (stock < 300) return "rgb(234 179 8)"; // yellow-500
    return "rgb(34 197 94)"; // green-500
  };

  // Dummy farmer information for display
  const farmerInfo = {
    name: product.farmerName || "Unknown Farmer",
    location: "N/A", // You might want to pass this from product data
    rating: 4.5, // Dummy rating
  };

  return (
    <GlassCard className="flex flex-col">
      {/* Product Image Display */}
      <div className="w-full h-40 bg-gray-700 bg-opacity-20 flex items-center justify-center rounded-md mb-4 overflow-hidden">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <ShoppingCart size={48} className="text-white opacity-50" /> // Using ShoppingCart as a placeholder
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-white text-sm mb-1" style={{ opacity: 0.8 }}>
        Category: {product.category}
      </p>
      <p className="text-white text-sm mb-4" style={{ opacity: 0.8 }}>
        Sold by:{" "}
        <span className="font-medium text-green-300">{farmerInfo.name}</span>
      </p>

      <div className="flex items-center mb-2">
        <Package
          size={20}
          className="mr-2"
          style={{ color: "white", opacity: 0.7 }}
        />
        <p className="text-white text-lg">
          Available Stock:{" "}
          <span className="font-bold">
            {product.stock} {product.unit}
          </span>
        </p>
      </div>

      <div
        className="w-full rounded-full h-2.5 mb-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: getStockColor(product.stock) }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, (product.stock / 500) * 100)}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>
      </div>

      <div className="flex justify-end gap-2 mt-auto">
        <button
          onClick={() => onToggleWishlist(product)}
          className={`p-2 rounded-full text-white transition-colors ${
            isWishlisted ? "bg-red-500 bg-opacity-50" : "bg-white bg-opacity-10"
          }`}
          style={{
            backgroundColor: isWishlisted
              ? "rgba(239, 68, 68, 0.5)"
              : "rgba(255, 255, 255, 0.1)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = isWishlisted
              ? "rgba(239, 68, 68, 0.6)"
              : "rgba(255, 255, 255, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = isWishlisted
              ? "rgba(239, 68, 68, 0.5)"
              : "rgba(255, 255, 255, 0.1)")
          }
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "white" : "none"}
            stroke={isWishlisted ? "white" : "currentColor"}
          />
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center px-4 py-2 text-white rounded-lg shadow-md transition-all duration-300"
          style={{
            background: "linear-gradient(to right, #2a9d8f, #264653)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          title="Add to Cart"
        >
          <ShoppingCart size={18} className="mr-2" /> Add to Cart
        </button>
      </div>
    </GlassCard>
  );
}
