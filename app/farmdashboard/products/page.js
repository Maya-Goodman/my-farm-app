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
  Image as ImageIcon,
} from "lucide-react"; // Import ImageIcon for placeholder
import { motion } from "framer-motion";

const initialProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    stock: 150,
    unit: "kg",
    category: "Vegetables",
    imageUrl: "/images/tomato.jpeg",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    stock: 500,
    unit: "dozen",
    category: "Dairy & Eggs",
    imageUrl: "/images/egg.jpeg",
  },
  {
    id: 3,
    name: "Wheat Grains",
    stock: 800,
    unit: "kg",
    category: "Grains",
    imageUrl: "/images/wheat.jpeg",
  },
  {
    id: 4,
    name: "Potatoes (New Season)",
    stock: 200,
    unit: "kg",
    category: "Vegetables",
    imageUrl: "/images/potato.jpeg",
  },
  {
    id: 5,
    name: "Milk",
    stock: 80,
    unit: "liters",
    category: "Dairy & Eggs",
    imageUrl: "/images/milk.jpeg",
  },
  {
    id: 6,
    name: "Corn",
    stock: 300,
    unit: "kg",
    category: "Grains",
    imageUrl: "/images/corn.jpeg",
  },
];

export default function ProductManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // For edit mode
  const [imagePreview, setImagePreview] = useState(null); // To store image data URL for preview

  const categories = [
    "All",
    ...new Set(initialProducts.map((p) => p.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockColor = (stock) => {
    if (stock < 100) return "rgb(239 68 68)"; // red-500
    if (stock < 300) return "rgb(234 179 8)"; // yellow-500
    return "rgb(34 197 94)"; // green-500
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the Data URL for preview
      };
      reader.readAsDataURL(file); // Read file as Data URL
    } else {
      setImagePreview(null);
    }
  };

  const handleAddEditProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: currentProduct ? currentProduct.id : products.length + 1,
      name: formData.get("name"),
      stock: parseInt(formData.get("stock")),
      unit: formData.get("unit"),
      category: formData.get("category"),
      imageUrl: imagePreview || currentProduct?.imageUrl || null, // Use imagePreview or existing URL
    };

    if (currentProduct) {
      setProducts(
        products.map((p) => (p.id === newProduct.id ? newProduct : p))
      );
    } else {
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
    setCurrentProduct(null);
    setImagePreview(null); // Clear preview after submission
  };

  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const openModal = (product = null) => {
    setCurrentProduct(product);
    setImagePreview(product?.imageUrl || null); // Set initial preview if editing
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">Product Management</h2>

      <GlassCard className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-1/2">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            style={{ opacity: 0.7 }}
            size={20}
          />
          <input
            type="text"
            placeholder="Search products..."
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
              // hover style handled by pseudo-classes in CSS normally, but here as a note
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Plus size={20} className="mr-2" /> Add Product
          </button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p
            className="text-white text-lg col-span-full text-center py-10"
            style={{ opacity: 0.8 }}
          >
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <GlassCard key={product.id} className="flex flex-col">
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
                  <ImageIcon size={48} className="text-white opacity-50" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-white text-sm mb-4" style={{ opacity: 0.8 }}>
                Category: {product.category}
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
                  animate={{
                    width: `${Math.min(100, (product.stock / 500) * 100)}%`,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </div>

              <div className="flex justify-end gap-2 mt-auto">
                <button
                  onClick={() => openModal(product)}
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)")
                  }
                  title="Edit Product"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="p-2 rounded-full text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.3)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(239, 68, 68, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(239, 68, 68, 0.3)")
                  }
                  title="Delete Product"
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
              {currentProduct ? "Edit Product" : "Add New Product"}
            </h3>
            <form onSubmit={handleAddEditProduct}>
              {/* Image Upload Input */}
              <div className="mb-4">
                <label
                  htmlFor="productImage"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                    // Custom file input styling with direct CSS, usually done with Tailwind plugins or complex CSS
                    "--file-bg-color": "rgba(42, 157, 143, 0.8)", // file:bg-blue-green-start with some opacity
                    "--file-text-color": "white",
                    "--file-hover-bg-color": "rgba(38, 70, 83, 0.9)", // file:hover:bg-blue-green-end
                    "--file-focus-ring-color": "#2a9d8f",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                />
                {imagePreview && (
                  <div className="mt-4 w-32 h-32 rounded-lg overflow-hidden border border-white border-opacity-20 mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Product Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Existing Form Fields */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={currentProduct?.name || ""}
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
                  Stock Level
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  defaultValue={currentProduct?.stock || ""}
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
                  defaultValue={currentProduct?.unit || ""}
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
                  defaultValue={currentProduct?.category || ""}
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
                  onClick={() => {
                    setIsModalOpen(false);
                    setImagePreview(null);
                    setCurrentProduct(null);
                  }}
                  className="px-6 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(107, 114, 128, 0.3)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(107, 114, 128, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(107, 114, 128, 0.3)")
                  }
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #2a9d8f, #264653)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  {currentProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      )}
    </Layout>
  );
}
