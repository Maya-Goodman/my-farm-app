// app/companydashboard/components/BulkProductCard.js
"use client";

import { motion } from "framer-motion";
import GlassCard from "@/app/components/GlassCard"; // Re-use GlassCard
import { PlusCircle, Info, Truck } from "lucide-react";
import Image from "next/image";

export default function BulkProductCard({ product, onAddToQuote }) {
  return (
    <GlassCard className="p-4 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-32 mb-4 bg-gray-100 rounded-md overflow-hidden">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        )}
      </div>
      <h4 className="text-xl font-bold text-[#333] mb-2">{product.name}</h4>
      <p className="text-sm text-gray-600 mb-1">by {product.farmerName}</p>
      <p className="text-sm text-gray-600 mb-3">Category: {product.category}</p>

      <div className="flex items-center justify-between text-gray-700 mb-4">
        <span className="flex items-center text-sm">
          <Info size={16} className="mr-1 text-blue-500" />
          Min Order: {product.minOrder} {product.unit}
        </span>
        <span className="flex items-center text-sm">
          <Truck size={16} className="mr-1 text-green-500" />
          Bulk Discount: {product.discount}%
        </span>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-lg font-bold text-green-700 mb-3">
          Price: ${product.pricePerUnit.toFixed(2)} / {product.unit}
          {product.discount > 0 && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              $
              {(product.pricePerUnit / (1 - product.discount / 100)).toFixed(2)}
            </span>
          )}
        </p>
        <motion.button
          onClick={() => onAddToQuote(product)}
          className="w-full py-2 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusCircle size={20} className="mr-2" /> Add to Quote
        </motion.button>
      </div>
    </GlassCard>
  );
}
