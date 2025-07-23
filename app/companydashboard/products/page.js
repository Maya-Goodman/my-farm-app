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
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);
  const [desiredQuantity, setDesiredQuantity] = useState("");
  const [quoteItems, setQuoteItems] = useState([]); // To store items added to quote

  const handleAddToQuoteClick = (product) => {
    setSelectedProductForQuote(product);
    setDesiredQuantity(""); // Reset quantity when opening new form
  };

  const handleSubmitQuoteRequest = (e) => {
    e.preventDefault();
    if (!selectedProductForQuote || !desiredQuantity) {
      alert("Please select a product and enter a desired quantity.");
      return;
    }

    const quantity = parseInt(desiredQuantity, 10);
    if (isNaN(quantity) || quantity < selectedProductForQuote.minOrder) {
      alert(
        `Please enter a quantity of at least ${selectedProductForQuote.minOrder} ${selectedProductForQuote.unit}.`
      );
      return;
    }

    const newQuoteItem = {
      productId: selectedProductForQuote.id,
      productName: selectedProductForQuote.name,
      quantity: quantity,
      unit: selectedProductForQuote.unit,
      farmerName: selectedProductForQuote.farmerName,
    };

    setQuoteItems((prevItems) => [...prevItems, newQuoteItem]);
    alert(
      `Added ${quantity} ${selectedProductForQuote.unit} of ${selectedProductForQuote.name} to your quote request!`
    );

    // Reset form
    setSelectedProductForQuote(null);
    setDesiredQuantity("");
  };

  const handleCancelQuote = () => {
    setSelectedProductForQuote(null);
    setDesiredQuantity("");
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
                onAddToQuote={handleAddToQuoteClick} // Pass the new handler
              />
            ))
          )}
        </div>
      </GlassCard>

      {/* Quote Request Form */}
      {selectedProductForQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <GlassCard className="p-8 w-full max-w-md mx-auto relative">
            <h3 className="text-2xl font-bold text-[#333] mb-6">
              Request Quote for {selectedProductForQuote.name}
            </h3>
            <form onSubmit={handleSubmitQuoteRequest}>
              <div className="mb-4">
                <label
                  htmlFor="desiredQuantity"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Desired Quantity ({selectedProductForQuote.unit}, min{" "}
                  {selectedProductForQuote.minOrder})
                </label>
                <input
                  type="number"
                  id="desiredQuantity"
                  className="w-full p-3 rounded-lg bg-gray-100 text-[#333] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={desiredQuantity}
                  onChange={(e) => setDesiredQuantity(e.target.value)}
                  min={selectedProductForQuote.minOrder}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancelQuote}
                  className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Add to Quote
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}

      {/* Display current quote items (Optional, for demonstration) */}
      {quoteItems.length > 0 && (
        <GlassCard className="p-6 mt-8">
          <h3 className="text-2xl font-bold text-[#333] mb-6">
            Your Current Quote Request
          </h3>
          <ul className="list-disc list-inside text-gray-800">
            {quoteItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.quantity} {item.unit} of {item.productName} from{" "}
                {item.farmerName}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Submit Full Quote Request
            </button>
          </div>
        </GlassCard>
      )}
    </>
  );
}
