"use client";

import React from "react";
import GlassCard from "@/app/components/GlassCard";// Path to GlassCard
import { Trash, ShoppingCart, HeartOff } from "lucide-react";

export default function Wishlist({
  wishlist,
  onRemoveFromWishlist,
  onAddToCartFromWishlist,
}) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <HeartOff size={24} className="mr-3" /> Saved Products (Wishlist)
      </h3>
      {wishlist.length === 0 ? (
        <p className="text-white text-lg opacity-80 text-center py-4">
          Your wishlist is empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center bg-white bg-opacity-10 p-3 rounded-lg"
            >
              <div className="flex items-center">
                {product.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md mr-3"
                  />
                )}
                <div>
                  <p className="text-lg text-white font-semibold">
                    {product.name}
                  </p>
                  <p className="text-sm text-white opacity-70">
                    {product.stock} {product.unit} available
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onAddToCartFromWishlist(product)}
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(42, 157, 143, 0.3)", // A light green/blue for add to cart
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(42, 157, 143, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(42, 157, 143, 0.3)")
                  }
                  title="Add to Cart"
                >
                  <ShoppingCart size={18} />
                </button>
                <button
                  onClick={() => onRemoveFromWishlist(product.id)}
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.3)", // bg-red-500 bg-opacity-30
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(239, 68, 68, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(239, 68, 68, 0.3)")
                  }
                  title="Remove from Wishlist"
                >
                  <Trash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
}
