'use client';

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
];

export default function InventoryManager() {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const categories = [
    "All",
    ...new Set(initialInventory.map((item) => item.category)),
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
    if (stock <= minStock) return "rgb(251 146 60)"; // text-orange-400 or red-400 depending on preference
    return "rgb(74 222 128)"; // text-green-400
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      id: currentItem ? currentItem.id : inventory.length + 1,
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
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
                style={{ backgroundColor: "#264653", color: "white" }}
              >
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={() => openModal()}
            className="flex items-center px-4 py-2 text-white rounded-lg shadow-md transition-all duration-300"
            style={{
              background: "linear-gradient(to right, #2a9d8f, #264653)",
              "&:hover": {
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              },
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
          filteredInventory.map((item) => (
            <GlassCard key={item.id} className="flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-white text-sm mb-4" style={{ opacity: 0.8 }}>
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
                  <AlertTriangle size={20} className="text-red-400 mr-2" />
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
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                  title="Edit Item"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.3)",
                    "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.4)" },
                  }}
                  title="Delete Item"
                >
                  <Trash size={18} />
                </button>
              </div>
            </GlassCard>
          ))
        )}
      </div>

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
                  {categories
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
                  className="px-6 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(107, 114, 128, 0.3)",
                    "&:hover": { backgroundColor: "rgba(107, 114, 128, 0.4)" },
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #2a9d8f, #264653)",
                    "&:hover": {
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    },
                  }}
                >
                  {currentItem ? "Update Item" : "Add Item"}
                </button>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      )}
    </Layout>
  );
}