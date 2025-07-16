"use client";

import Layout from "@/app/components/Layout";
import GlassCard from "@/app/components/GlassCard";
import {
  CloudSun,
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Gauge,
  Thermometer,
  CloudLightning,
  AlertTriangle,
  Import,
} from "lucide-react";
import { motion } from "framer-motion";

const getWeatherIcon = (condition) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun size={48} className="text-yellow-400" />;
    case "partly cloudy":
      return <CloudSun size={48} className="text-gray-300" />;
    case "cloudy":
      return <Cloud size={48} className="text-gray-400" />;
    case "rainy":
      return <CloudRain size={48} className="text-blue-400" />;
    case "snowy":
      return <CloudSnow size={48} className="text-blue-200" />;
    case "thunderstorm":
      return <CloudLightning size={48} className="text-purple-400" />;
    default:
      return <CloudSun size={48} className="text-gray-300" />;
  }
};

export default function Weather() {
  const currentWeatherData = {
    location: "Gaborone, Botswana",
    temperature: "28°C",
    condition: "Sunny",
    humidity: "45%",
    windSpeed: "10 km/h",
    uvIndex: "7 (High)",
    sunrise: "06:30 AM",
    sunset: "06:00 PM",
  };

  const forecastData = [
    { day: "Wed", temp: "27°C", condition: "Partly Cloudy" },
    { day: "Thu", temp: "26°C", condition: "Cloudy" },
    { day: "Fri", temp: "29°C", condition: "Sunny" },
    { day: "Sat", temp: "24°C", condition: "Rainy" },
    { day: "Sun", temp: "25°C", condition: "Partly Cloudy" },
  ];

  const weatherAlerts = [
    {
      id: 1,
      type: "warning",
      message: "High UV Index today. Protect yourself.",
    },
    {
      id: 2,
      type: "info",
      message: "Ideal conditions for planting crops this week.",
    },
  ];

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">
        Weather Information
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Current Weather */}
        <GlassCard className="lg:col-span-2 flex flex-col items-center justify-center text-center p-8">
          <h3 className="text-white text-3xl font-semibold mb-2">
            {currentWeatherData.location}
          </h3>
          <div className="flex items-center my-4">
            {getWeatherIcon(currentWeatherData.condition)}
            <p className="text-white text-7xl font-bold ml-4">
              {currentWeatherData.temperature}
            </p>
          </div>
          <p className="text-white text-3xl mb-6" style={{ opacity: 0.9 }}>
            {currentWeatherData.condition}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div
              className="flex items-center justify-center p-3 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <Droplets size={20} className="text-blue-300 mr-2" />
              <span className="text-white" style={{ opacity: 0.8 }}>
                Humidity: {currentWeatherData.humidity}
              </span>
            </div>
            <div
              className="flex items-center justify-center p-3 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <Wind size={20} className="text-gray-300 mr-2" />
              <span className="text-white" style={{ opacity: 0.8 }}>
                Wind: {currentWeatherData.windSpeed}
              </span>
            </div>
            <div
              className="flex items-center justify-center p-3 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <Gauge size={20} className="text-yellow-300 mr-2" />
              <span className="text-white" style={{ opacity: 0.8 }}>
                UV Index: {currentWeatherData.uvIndex}
              </span>
            </div>
            <div
              className="flex items-center justify-center p-3 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <Sun size={20} className="text-orange-300 mr-2" />
              <span className="text-white" style={{ opacity: 0.8 }}>
                Sunrise: {currentWeatherData.sunrise}
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Weather Alerts */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Weather Alerts & Recommendations
          </h3>
          {weatherAlerts.length === 0 ? (
            <p className="text-white" style={{ opacity: 0.8 }}>
              No active alerts.
            </p>
          ) : (
            <ul>
              {weatherAlerts.map((alert) => (
                <motion.li
                  key={alert.id}
                  className={`flex items-center p-3 rounded-lg mb-2 last:mb-0`}
                  style={{
                    backgroundColor:
                      alert.type === "warning"
                        ? "rgba(239, 68, 68, 0.3)" // bg-red-500 bg-opacity-30
                        : "rgba(59, 130, 246, 0.3)", // bg-blue-500 bg-opacity-30
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <AlertTriangle
                    size={20}
                    className="text-white mr-3 shrink-0"
                  />
                  <p className="text-white text-sm">{alert.message}</p>
                </motion.li>
              ))}
            </ul>
          )}
        </GlassCard>
      </div>

      {/* 5-Day Forecast */}
      <GlassCard>
        <h3 className="text-2xl font-semibold text-white mb-4">
          5-Day Forecast
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {forecastData.map((day, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }} // bg-white bg-opacity-5
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <p className="text-white text-lg mb-2" style={{ opacity: 0.8 }}>
                {day.day}
              </p>
              {getWeatherIcon(day.condition)}
              <p className="text-white text-xl font-bold mt-2">{day.temp}</p>
              <p className="text-white text-sm" style={{ opacity: 0.7 }}>
                {day.condition}
              </p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </Layout>
  );
}
