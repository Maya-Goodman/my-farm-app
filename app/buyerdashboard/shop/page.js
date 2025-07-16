// app/buyerdashboard/shop/page.js
"use client";

import { useState } from "react";
import GlassCard from "@/app/components/GlassCard";
import ProductCardBuyer from "../components/ProductCardBuyer"; // Adjust path for components
import { ShoppingCart, Heart, Search } from "lucide-react"; // Add Search icon

const initialProductsForSale = [
  // This data can be the same as in buyerdashboard/page.js or fetched from an API
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
    id: 2,
    name: "Farm Fresh Eggs",
    stock: 500,
    unit: "dozen",
    category: "Dairy & Eggs",
    price: 4.0,
    farmerId: 102,
    farmerName: "Sunny Side Farm",
    imageUrl: "/images/egg.jpeg",
  },
  {
    id: 3,
    name: "Wheat Grains",
    stock: 800,
    unit: "kg",
    category: "Grains",
    price: 1.2,
    farmerId: 101,
    farmerName: "Green Valley Farms",
    imageUrl: "/images/wheat.jpeg",
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
  {
    id: 5,
    name: "Milk",
    stock: 80,
    unit: "liters",
    category: "Dairy & Eggs",
    price: 1.8,
    farmerId: 102,
    farmerName: "Sunny Side Farm",
    imageUrl: "/images/milk.jpeg",
  },
  {
    id: 6,
    name: "Corn",
    stock: 300,
    unit: "kg",
    category: "Grains",
    price: 0.9,
    farmerId: 104,
    farmerName: "Golden Fields Co.",
    imageUrl: "/images/corn.jpeg",
  },
];

export default function ShopPage() {
  const [products, setProducts] = useState(initialProductsForSale);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCart, setCurrentCart] = useState([]); // A separate state for this page's cart interaction
  const [currentWishlist, setCurrentWishlist] = useState([]); // A separate state for this page's wishlist interaction

  const handleAddToCart = (product) => {
    // Implement add to cart logic here, or lift state to a global context if preferred
    alert(`${product.name} added to your cart! (Simulated)`);
    // Example: setCurrentCart(prev => [...prev, product]);
  };

  const handleToggleWishlist = (product) => {
    const isAlreadyWishlisted = currentWishlist.some(
      (item) => item.id === product.id
    );
    if (isAlreadyWishlisted) {
      setCurrentWishlist(
        currentWishlist.filter((item) => item.id !== product.id)
      );
      alert(`${product.name} removed from wishlist.`);
    } else {
      setCurrentWishlist([...currentWishlist, product]);
      alert(`${product.name} added to wishlist!`);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.farmerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">Shop Products</h2>

      <GlassCard className="mb-6 p-6 flex items-center">
        <Search size={24} className="text-white mr-3" />
        <input
          type="text"
          placeholder="Search products, categories, farmers..."
          className="flex-1 p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6">
          Available Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p
              className="text-white text-lg col-span-full text-center py-10"
              style={{ opacity: 0.8 }}
            >
              No products match your search.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCardBuyer
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={currentWishlist.some(
                  (item) => item.id === product.id
                )}
              />
            ))
          )}
        </div>
      </GlassCard>
    </>
  );
}
