// app/buyerdashboard/settings/page.js
"use client";

import { useState } from "react";
import GlassCard from "@/app/components/GlassCard"; // Assuming you have this component
import { User, Mail, Phone, MapPin, Save } from "lucide-react";
import { toast } from "react-hot-toast"; // Example for notifications (install react-hot-toast if not present)

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "Jane Buyer",
    email: "jane.buyer@example.com",
    phone: "123-456-7890",
    address: "123 Green Street, City, Country",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend API
    console.log("Saving changes:", formData);
    toast.success("Profile updated successfully!"); // Show a success message
    // In a real application, you'd handle API calls, loading states, and error messages
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">Account Settings</h2>

      <GlassCard className="p-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6">Edit Profile</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-white text-lg font-medium mb-2"
            >
              <div className="flex items-center">
                <User size={20} className="mr-2 text-blue-300" />
                Full Name
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-lg font-medium mb-2"
            >
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-300" />
                Email Address
              </div>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-white text-lg font-medium mb-2"
            >
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-300" />
                Phone Number
              </div>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Address Field */}
          <div>
            <label
              htmlFor="address"
              className="block text-white text-lg font-medium mb-2"
            >
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-300" />
                Address
              </div>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <Save size={20} className="mr-2" />
            Save Changes
          </button>
        </form>
      </GlassCard>
    </>
  );
}
