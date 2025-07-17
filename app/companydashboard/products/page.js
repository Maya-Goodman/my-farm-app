// app/companydashboard/products/page.js
"use client";

import { useState } from "react";
import GlassCard from "@/app/components/GlassCard";
import BulkProductCard from "../components/BulkProductCard"; // New component
import { Search } from "lucide-react";

const dummyBulkProducts = [
  {
    id: 1,
    name: "Organic Wheat",
    minOrder: 500,
    unit: "kg",
    pricePerUnit: 0.9,
    discount: 10,
    farmerName: "Wheatland Farms",
    category: "Grains",
    imageUrl: "/images/wheat.jpeg",
  },
  {
    id: 2,
    name: "Industrial Tomatoes",
    minOrder: 200,
    unit: "kg",
    pricePerUnit: 1.5,
    discount: 5,
    farmerName: "SunHarvest Agro",
    category: "Vegetables",
    imageUrl: "/images/tomato.jpeg",
  },
  {
    id: 3,
    name: "Bulk Eggs",
    minOrder: 100,
    unit: "dozen",
    pricePerUnit: 3.2,
    discount: 15,
    farmerName: "Happy Hen Co.",
    category: "Dairy & Eggs",
    imageUrl: "/images/egg.jpeg",
  },
  {
    id: 4,
    name: "Potatoes (Bulk)",
    minOrder: 300,
    unit: "kg",
    pricePerUnit: 0.8,
    discount: 8,
    farmerName: "Ridgeview Supply",
    category: "Vegetables",
    imageUrl: "/images/potato.jpeg",
  },
  {
    id: 5,
    name: "Corn Silage",
    minOrder: 1000,
    unit: "kg",
    pricePerUnit: 0.4,
    discount: 20,
    farmerName: "GreenPasture Feeds",
    category: "Animal Feed",
    imageUrl: "/images/corn.jpeg",
  },
];

export default function CompanyProductsPage() {
  const [products, setProducts] = useState(dummyBulkProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToQuote = (product) => {
    alert(`Added ${product.name} to quote request! (Simulated)`);
    // In a real app, this would add to a quotation cart or send a request
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.farmerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Bulk Products</h2>

      <GlassCard className="mb-6 p-6 flex items-center">
        <Search size={24} className="text-gray-700 mr-3" />
        <input
          type="text"
          placeholder="Search bulk products, categories, farmers..."
          className="flex-1 p-3 rounded-lg bg-gray-100 text-[#333] placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-[#333] mb-6">
          Available for Bulk Order
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-700 text-lg col-span-full text-center py-10">
              No bulk products match your search.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <BulkProductCard
                key={product.id}
                product={product}
                onAddToQuote={handleAddToQuote}
              />
            ))
          )}
        </div>
      </GlassCard>
    </>
  );
}
