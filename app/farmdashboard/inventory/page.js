"use client";

import { useState } from "react";
import Layout from "@/app/components/Layout";
import GlassCard from "@/app/components/GlassCard";
import {
  Search,
  Plus,
  Edit,
  Trash,
  Package,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialInventory = [
  {
    id: 1,
    name: "Fertilizer (NPK 10-10-10)",
    stock: 250,
    unit: "kg",
    category: "Chemicals",
    minStock: 50,
  },
  {
    id: 2,
    name: "Pesticide (Organic)",
    stock: 50,
    unit: "liters",
    category: "Chemicals",
    minStock: 20,
  },
  {
    id: 3,
    name: "Shovels",
    stock: 15,
    unit: "units",
    category: "Tools",
    minStock: 5,
  },
  {
    id: 4,
    name: "Gloves (Work)",
    stock: 30,
    unit: "pairs",
    category: "PPE",
    minStock: 10,
  },
  {
    id: 5,
    name: "Irrigation Pipes",
    stock: 100,
    unit: "meters",
    category: "Equipment",
    minStock: 30,
  },
  {
    id: 6,
    name: "Tractor Oil",
    stock: 5,
    unit: "liters",
    category: "Fluids",
    minStock: 2,
  },
  {
    id: 7,
    name: "Seeds (Corn)",
    stock: 50,
    unit: "packs",
    category: "Crops",
    minStock: 15,
  },
  {
    id: 8,
    name: "Safety Goggles",
    stock: 20,
    unit: "units",
    category: "PPE",
    minStock: 8,
  },
];

// Define aesthetically pleasing colors for each category
const categoryColors = {
  Chemicals: "#e76f51", // Slightly reddish-orange, warm
  Tools: "#2a9d8f", // Your existing greenish-teal
  PPE: "#e9c46a", // Muted yellow/gold
  Equipment: "#f4a261", // Orange-ish
  Fluids: "#8ab6d9", // Softer blue
  Crops: "#90be6d", // A nice green
  Default: "rgba(255, 255, 255, 0.2)", // Fallback if category not found, subtle
};

export default function InventoryManager() {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Dynamically get categories including from new items
  const allCategories = [
    "All",
    ...new Set(inventory.map((item) => item.category)),
  ];

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockStatus = (stock, minStock) => {
    if (stock <= minStock) return "Low Stock";
    return "In Stock";
  };

  const getStockStatusColor = (stock, minStock) => {
    if (stock <= minStock) return "rgb(251 146 60)"; // Tailwind's text-orange-400
    return "rgb(74 222 128)"; // Tailwind's text-green-400
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      id: currentItem
        ? currentItem.id
        : Math.max(...inventory.map((i) => i.id), 0) + 1, // Generate unique ID
      name: formData.get("name"),
      stock: parseInt(formData.get("stock")),
      unit: formData.get("unit"),
      category: formData.get("category"),
      minStock: parseInt(formData.get("minStock")),
    };

    if (currentItem) {
      setInventory(inventory.map((i) => (i.id === newItem.id ? newItem : i)));
    } else {
      setInventory([...inventory, newItem]);
    }
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleDeleteItem = (id) => {
    if (confirm("Are you sure you want to delete this inventory item?")) {
      setInventory(inventory.filter((item) => item.id !== id));
    }
  };

  const openModal = (item = null) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">Inventory Manager</h2>

      <GlassCard className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-1/2">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            style={{ opacity: 0.7 }}
            size={20}
          />
          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full pl-10 pr-4 py-2 rounded-lg text-white"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "--tw-placeholder-opacity": "0.7",
              outline: "none",
              "--tw-ring-color": "#2a9d8f",
              boxShadow: "0 0 0 0px var(--tw-ring-color)",
              transition: "box-shadow 0.15s ease-in-out",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 0 2px var(--tw-ring-color)")
            }
            onBlur={(e) =>
              (e.target.style.boxShadow = "0 0 0 0px var(--tw-ring-color)")
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto flex gap-4">
          <select
            className="p-2 rounded-lg text-white"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              outline: "none",
              "--tw-ring-color": "#2a9d8f",
              boxShadow: "0 0 0 0px var(--tw-ring-color)",
              transition: "box-shadow 0.15s ease-in-out",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 0 2px var(--tw-ring-color)")
            }
            onBlur={(e) =>
              (e.target.style.boxShadow = "0 0 0 0px var(--tw-ring-color)")
            }
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {allCategories.map(
              (
                cat // Use allCategories here
              ) => (
                <option
                  key={cat}
                  value={cat}
                  style={{ backgroundColor: "#264653", color: "white" }}
                >
                  {cat}
                </option>
              )
            )}
          </select>
          <button
            onClick={() => openModal()}
            className="flex items-center px-4 py-2 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg" // Added Tailwind hover
            style={{
              background: "linear-gradient(to right, #2a9d8f, #264653)",
            }}
          >
            <Plus size={20} className="mr-2" /> Add Item
          </button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.length === 0 ? (
          <p
            className="text-white text-lg col-span-full text-center py-10"
            style={{ opacity: 0.8 }}
          >
            No inventory items found.
          </p>
        ) : (
          <AnimatePresence>
            {" "}
            {/* Enable exit animations for items */}
            {filteredInventory.map((item) => (
              <motion.div // Wrap GlassCard in motion.div for animation
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard
                  className="flex flex-col relative overflow-hidden" // Added relative and overflow-hidden for pseudo-element
                  style={{
                    borderLeft: `8px solid ${
                      categoryColors[item.category] || categoryColors.Default
                    }`, // Dynamic left border
                  }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p
                    className="text-white text-sm mb-4"
                    style={{ opacity: 0.8 }}
                  >
                    Category: {item.category}
                  </p>

                  <div className="flex items-center mb-2">
                    <Package
                      size={20}
                      className="mr-2"
                      style={{ color: "white", opacity: 0.7 }}
                    />
                    <p className="text-white text-lg">
                      Stock:{" "}
                      <span className="font-bold">
                        {item.stock} {item.unit}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    {item.stock <= item.minStock ? (
                      <AlertTriangle
                        size={20}
                        className="text-orange-400 mr-2"
                      /> // Changed to orange-400
                    ) : (
                      <CheckCircle size={20} className="text-green-400 mr-2" />
                    )}
                    <span
                      className="font-semibold"
                      style={{
                        color: getStockStatusColor(item.stock, item.minStock),
                      }}
                    >
                      {getStockStatus(item.stock, item.minStock)}
                    </span>
                    {item.stock <= item.minStock && (
                      <span
                        className="text-white text-sm ml-2"
                        style={{ opacity: 0.6 }}
                      >
                        (Min: {item.minStock} {item.unit})
                      </span>
                    )}
                  </div>

                  <div className="flex justify-end gap-2 mt-auto">
                    <button
                      onClick={() => openModal(item)}
                      className="p-2 rounded-full text-white transition-colors hover:bg-white hover:bg-opacity-20" // Added Tailwind hover
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      title="Edit Item"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-2 rounded-full text-white transition-colors hover:bg-red-500 hover:bg-opacity-40" // Added Tailwind hover
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.3)",
                      }}
                      title="Delete Item"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Modal remains largely the same */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <GlassCard className="w-full max-w-md">
              <h3 className="text-2xl font-bold text-white mb-6">
                {currentItem ? "Edit Inventory Item" : "Add New Inventory Item"}
              </h3>
              <form onSubmit={handleAddItem}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={currentItem?.name || ""}
                    className="w-full p-3 rounded-lg text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      outline: "none",
                      "--tw-ring-color": "#2a9d8f",
                      boxShadow: "0 0 0 0px var(--tw-ring-color)",
                      transition: "box-shadow 0.15s ease-in-out",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px var(--tw-ring-color)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 0px var(--tw-ring-color)")
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Current Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    defaultValue={currentItem?.stock || ""}
                    className="w-full p-3 rounded-lg text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      outline: "none",
                      "--tw-ring-color": "#2a9d8f",
                      boxShadow: "0 0 0 0px var(--tw-ring-color)",
                      transition: "box-shadow 0.15s ease-in-out",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px var(--tw-ring-color)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 0px var(--tw-ring-color)")
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="unit"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Unit
                  </label>
                  <input
                    type="text"
                    id="unit"
                    name="unit"
                    defaultValue={currentItem?.unit || ""}
                    className="w-full p-3 rounded-lg text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      outline: "none",
                      "--tw-ring-color": "#2a9d8f",
                      boxShadow: "0 0 0 0px var(--tw-ring-color)",
                      transition: "box-shadow 0.15s ease-in-out",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px var(--tw-ring-color)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 0px var(--tw-ring-color)")
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="minStock"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Minimum Stock Alert
                  </label>
                  <input
                    type="number"
                    id="minStock"
                    name="minStock"
                    defaultValue={currentItem?.minStock || ""}
                    className="w-full p-3 rounded-lg text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      outline: "none",
                      "--tw-ring-color": "#2a9d8f",
                      boxShadow: "0 0 0 0px var(--tw-ring-color)",
                      transition: "box-shadow 0.15s ease-in-out",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px var(--tw-ring-color)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 0px var(--tw-ring-color)")
                    }
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="category"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={currentItem?.category || ""}
                    className="w-full p-3 rounded-lg text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      outline: "none",
                      "--tw-ring-color": "#2a9d8f",
                      boxShadow: "0 0 0 0px var(--tw-ring-color)",
                      transition: "box-shadow 0.15s ease-in-out",
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px var(--tw-ring-color)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 0px var(--tw-ring-color)")
                    }
                    required
                  >
                    <option
                      value=""
                      disabled
                      style={{ backgroundColor: "#264653", color: "white" }}
                    >
                      Select a category
                    </option>
                    {allCategories // Use allCategories here
                      .filter((cat) => cat !== "All")
                      .map((cat) => (
                        <option
                          key={cat}
                          value={cat}
                          style={{ backgroundColor: "#264653", color: "white" }}
                        >
                          {cat}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 rounded-lg text-white transition-colors hover:bg-gray-600 hover:bg-opacity-40" // Added Tailwind hover
                    style={{
                      backgroundColor: "rgba(107, 114, 128, 0.3)",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300 hover:shadow-lg" // Added Tailwind hover
                    style={{
                      background: "linear-gradient(to right, #2a9d8f, #264653)",
                    }}
                  >
                    {currentItem ? "Update Item" : "Add Item"}
                  </button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
