"use client";

import { useState } from "react";
import GlassCard from "../components/GlassCard"; // Path to GlassCard
import ProductCardBuyer from "./components/ProductCardBuyer";
import Wishlist from "./components/Wishlist";
import InteractedFarmers from "./components/InteractedFarmers";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react"; // For notifications
import { motion } from "framer-motion"; // Ensure motion is imported for notifications

// Dummy data for demonstration
const initialProductsForSale = [
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

const initialFarmers = [
  {
    id: 101,
    name: "Green Valley Farms",
    location: "Rural Area A",
    rating: 4.8,
    produce: "Various Vegetables, Grains",
  },
  {
    id: 102,
    name: "Sunny Side Farm",
    location: "Valley Town",
    rating: 4.5,
    produce: "Eggs, Dairy Products",
  },
  {
    id: 103,
    name: "Ridgeview Produce",
    location: "Mountain Pass",
    rating: 4.2,
    produce: "Root Vegetables, Fruits",
  },
  {
    id: 104,
    name: "Golden Fields Co.",
    location: "Flatlands",
    rating: 4.0,
    produce: "Maize, Sorghum",
  },
  // New dummy data for interacted farmers
  {
    id: 105,
    name: "Kutlo's Organics",
    location: "Mochudi",
    rating: 4.7,
    produce: "Organic Vegetables, Herbs",
  },
  {
    id: 106,
    name: "Chanda's Poultry",
    location: "Francistown",
    rating: 4.9,
    produce: "Poultry, Eggs",
  },
  {
    id: 107,
    name: "Kago's Kgalagadi",
    location: "Kgalagadi",
    rating: 4.3,
    produce: "Potatoes, Watermelons",
  },
];

export default function BuyerDashboard() {
  const [productsAvailable, setProductsAvailable] = useState(
    initialProductsForSale
  );
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // Initialize interactedFarmers with ALL initialFarmers data
  // This ensures Kutlo, Chanda, Kago are always visible if that's the desired behavior.
  // If you only want them to appear *after* interaction, then the previous logic was fine.
  const [interactedFarmers, setInteractedFarmers] = useState(initialFarmers);
  const [notification, setNotification] = useState(null); // { message, type: 'success' | 'error' | 'info' }

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Notification disappears after 3 seconds
  };

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification(`${product.name} added to cart!`, "success");

    // Automatically add the farmer to 'interacted farmers' when their product is added to cart
    // Only add if not already present to avoid duplicates
    const farmer = initialFarmers.find((f) => f.id === product.farmerId);
    if (farmer && !interactedFarmers.some((f) => f.id === farmer.id)) {
      setInteractedFarmers((prevFarmers) => [...prevFarmers, farmer]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    showNotification("Item removed from cart.", "info");
  };

  const handleToggleWishlist = (product) => {
    const isAlreadyWishlisted = wishlist.some((item) => item.id === product.id);
    if (isAlreadyWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      showNotification(`${product.name} removed from wishlist.`, "info");
    } else {
      setWishlist([...wishlist, product]);
      showNotification(`${product.name} added to wishlist!`, "success");
    }
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      showNotification(
        "Your cart is empty. Add items before purchasing.",
        "error"
      );
      return;
    }
    // Simulate purchase logic (e.g., deducting stock, clearing cart)
    const newProductsAvailable = productsAvailable.map((p) => {
      const cartItem = cart.find((item) => item.id === p.id);
      if (cartItem) {
        return { ...p, stock: p.stock - cartItem.quantity };
      }
      return p;
    });
    setProductsAvailable(newProductsAvailable);
    setCart([]); // Clear cart after purchase
    showNotification(
      "Purchase successful! Thank you for your order.",
      "success"
    );

    // Ensure all farmers from purchased items are in interacted farmers list
    cart.forEach((item) => {
      const farmer = initialFarmers.find((f) => f.id === item.farmerId);
      if (farmer && !interactedFarmers.some((f) => f.id === farmer.id)) {
        setInteractedFarmers((prevFarmers) => [...prevFarmers, farmer]);
      }
    });
  };

  const totalCartValue = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {" "}
      {/* This page uses its parent layout (buyerdashboard/layout.js) */}
      <h2 className="text-4xl font-bold text-white mb-8">Buyer Dashboard</h2>
      {/* Notification component */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white flex items-center z-[100] ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {notification.type === "success" && (
            <CheckCircle size={20} className="mr-2" />
          )}
          {notification.type === "error" && (
            <XCircle size={20} className="mr-2" />
          )}
          {notification.message}
        </motion.div>
      )}
      {/* Cart Summary */}
      <GlassCard className="mb-6 p-6">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <ShoppingCart size={24} className="mr-3" /> Your Cart ({cart.length}{" "}
          items)
        </h3>
        {cart.length === 0 ? (
          <p className="text-white opacity-80">
            Your cart is empty. Start adding products!
          </p>
        ) : (
          <>
            <ul className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
              {" "}
              {/* Added max-h and overflow */}
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center text-white bg-white bg-opacity-10 p-2 rounded-md"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors p-1 rounded-full"
                      title="Remove from cart"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center border-t border-white border-opacity-20 pt-4 mt-4">
              <span className="text-xl font-bold text-white">
                Total: ${totalCartValue.toFixed(2)}
              </span>
              <button
                onClick={handlePurchase}
                className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(to right, #2a9d8f, #264653)",
                }}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </GlassCard>
      {/* Products Available for Purchase */}
      <GlassCard className="mb-6 p-6">
        <h3 className="text-2xl font-bold text-white mb-6">
          Products from Farmers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsAvailable.length === 0 ? (
            <p
              className="text-white text-lg col-span-full text-center py-10"
              style={{ opacity: 0.8 }}
            >
              No products currently listed for sale.
            </p>
          ) : (
            productsAvailable.map((product) => (
              <ProductCardBuyer
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
              />
            ))
          )}
        </div>
      </GlassCard>
      {/* Wishlist and Interacted Farmers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Wishlist
          wishlist={wishlist}
          onRemoveFromWishlist={handleToggleWishlist}
          onAddToCartFromWishlist={handleAddToCart}
        />
        {/* Pass the updated interactedFarmers state */}
        <InteractedFarmers farmers={interactedFarmers} />
      </div>
    </>
  );
}
