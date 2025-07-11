"use client";

import {
  ArrowRight,
  Leaf,
  ShoppingCart,
  Building2, // Added for company icon
  User, // Added for individual icon
  Mail,
  Lock,
  Phone,
  MapPin,
  ClipboardList,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("individual"); // 'individual', 'farmer', 'company'

  const TabButton = ({ id, icon, label, onClick, isActive, colorClass }) => (
    <button
      className={`flex-1 flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
        isActive
          ? `bg-gray-800 border-2 ${colorClass}`
          : "bg-gray-900/50 border border-gray-700 hover:bg-gray-800/70"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
          isActive ? `bg-gradient-to-r ${colorClass}` : "bg-gray-700"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-semibold text-lg ${
          isActive ? "text-white" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </button>
  );

  const InputField = ({ id, label, type, placeholder, icon: Icon }) => (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-300 text-sm font-medium mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-500" />
          </div>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-gray-800 shadow-2xl">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Leaf className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              AgriLink
            </span>
          </Link>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join the AgriLink{" "}
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Register as a buyer, farmer, or company to get started.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4">
            <TabButton
              id="individual"
              icon={<User className="h-6 w-6 text-white" />}
              label="Individual Buyer"
              onClick={() => setActiveTab("individual")}
              isActive={activeTab === "individual"}
              colorClass="from-blue-500 to-blue-600 border-blue-500"
            />
            <TabButton
              id="farmer"
              icon={<Leaf className="h-6 w-6 text-white" />}
              label="Farmer"
              onClick={() => setActiveTab("farmer")}
              isActive={activeTab === "farmer"}
              colorClass="from-green-500 to-green-600 border-green-500"
            />
            <TabButton
              id="company"
              icon={<Building2 className="h-6 w-6 text-white" />}
              label="Company"
              onClick={() => setActiveTab("company")}
              isActive={activeTab === "company"}
              colorClass="from-purple-500 to-indigo-600 border-purple-500"
            />
          </div>
        </div>

        <form className="space-y-6">
          {activeTab === "individual" && (
            <div className="space-y-6">
              <InputField
                id="first-name"
                label="First Name"
                type="text"
                placeholder="John"
                icon={User}
              />
              <InputField
                id="surname"
                label="Surname"
                type="text"
                placeholder="Doe"
                icon={User}
              />
              <InputField
                id="email"
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
                icon={Mail}
              />
              <InputField
                id="password"
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="phone"
                label="Phone Number (Optional)"
                type="tel"
                placeholder="+1 (555) 123-4567"
                icon={Phone}
              />
              <InputField
                id="delivery-address"
                label="Delivery Address"
                type="text"
                placeholder="123 Main St, Anytown, USA"
                icon={MapPin}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg py-4 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center"
              >
                REGISTER AS BUYER
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {activeTab === "farmer" && (
            <div className="space-y-6">
              <InputField
                id="farm-name"
                label="Farm Name"
                type="text"
                placeholder="Green Valley Organic Farm"
                icon={Leaf}
              />
              <InputField
                id="farmer-name"
                label="Contact Person Name"
                type="text"
                placeholder="Maria Rodriguez"
                icon={User}
              />
              <InputField
                id="farmer-email"
                label="Email Address"
                type="email"
                placeholder="maria.r@farm.com"
                icon={Mail}
              />
              <InputField
                id="farmer-password"
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="farmer-confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="farm-phone"
                label="Farm Phone Number"
                type="tel"
                placeholder="+1 (555) 987-6543"
                icon={Phone}
              />
              <InputField
                id="farm-address"
                label="Farm Address"
                type="text"
                placeholder="456 Rural Rd, Farmville, USA"
                icon={MapPin}
              />
              <InputField
                id="farm-type"
                label="Type of Farming"
                type="text"
                placeholder="e.g., Organic Vegetables, Dairy, Fruits"
                icon={ClipboardList}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-4 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center"
              >
                REGISTER FARM
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {activeTab === "company" && (
            <div className="space-y-6">
              <InputField
                id="company-name"
                label="Company Name"
                type="text"
                placeholder="Fresh Eats Restaurant"
                icon={Building2}
              />
              <InputField
                id="company-contact-name"
                label="Contact Person Name"
                type="text"
                placeholder="Sarah Chen"
                icon={User}
              />
              <InputField
                id="company-email"
                label="Company Email"
                type="email"
                placeholder="sarah.c@fresheats.com"
                icon={Mail}
              />
              <InputField
                id="company-password"
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="company-confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
              />
              <InputField
                id="company-phone"
                label="Company Phone Number"
                type="tel"
                placeholder="+1 (555) 321-9876"
                icon={Phone}
              />
              <InputField
                id="company-address"
                label="Company Address"
                type="text"
                placeholder="789 Business Blvd, Metropolis, USA"
                icon={MapPin}
              />
              <InputField
                id="company-type"
                label="Company Type"
                type="text"
                placeholder="e.g., Restaurant, Retailer, Distributor"
                icon={Briefcase}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-lg py-4 rounded-xl group transition-all duration-200 font-medium flex items-center justify-center"
              >
                REGISTER COMPANY
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
