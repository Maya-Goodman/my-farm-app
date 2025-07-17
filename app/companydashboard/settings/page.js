// app/companydashboard/settings/page.js
"use client";

import GlassCard from "@/app/components/GlassCard";
import { Settings, User, Key, Building } from "lucide-react";

export default function CompanySettingsPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#333] mb-8">Company Settings</h2>

      <GlassCard className="p-6 mb-6">
        <h3 className="text-2xl font-bold text-[#333] mb-4 flex items-center">
          <Building size={24} className="mr-3" /> Company Profile
        </h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="companyName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              defaultValue="AgriCorp Solutions"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="contactPerson"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              defaultValue="Jane Manager"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="contact@agricorp.com"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Save Profile
          </button>
        </form>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-[#333] mb-4 flex items-center">
          <Key size={24} className="mr-3" /> Security
        </h3>
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Change Password
        </button>
      </GlassCard>
    </>
  );
}
