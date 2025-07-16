// app/buyerdashboard/weather/page.js
"use client";

import GlassCard from "@/app/components/GlassCard";
import { CloudSun, Droplet, Wind, Thermometer, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function BuyerWeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Gaborone, Botswana"); // Default location

  // Simulate fetching weather data
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchWeather = async () => {
      try {
        // In a real app, you'd call a weather API here
        // For now, simulate a delay and provide static data
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setWeatherData({
          currentTemp: 25,
          feelsLike: 24,
          condition: "Partly Cloudy",
          humidity: 60,
          windSpeed: 10,
          location: location,
          forecast: [
            { day: "Today", high: 28, low: 18, icon: "☀️" },
            { day: "Tomorrow", high: 26, low: 17, icon: "☁️" },
            { day: "Fri", high: 27, low: 19, icon: "🌦️" },
            { day: "Sat", high: 29, low: 20, icon: "☀️" },
          ],
        });
      } catch (err) {
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [location]); // Re-fetch if location changes

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-8">
        Weather Forecast (Buyer)
      </h2>

      <GlassCard className="p-6 mb-6">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <MapPin size={24} className="mr-3" /> Weather for {location}
        </h3>
        {loading && (
          <p className="text-white opacity-80 text-center">
            Loading weather data...
          </p>
        )}
        {error && <p className="text-red-400 text-center">{error}</p>}
        {weatherData && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <CloudSun size={60} className="text-yellow-300 mr-4" />
                <div>
                  <p className="text-5xl font-bold text-white">
                    {weatherData.currentTemp}°C
                  </p>
                  <p className="text-white opacity-80">
                    Feels like {weatherData.feelsLike}°C
                  </p>
                </div>
              </div>
              <div className="text-white text-right">
                <p className="text-xl font-semibold">{weatherData.condition}</p>
                <p className="flex items-center justify-end mt-1">
                  <Droplet size={20} className="mr-2" /> Humidity:{" "}
                  {weatherData.humidity}%
                </p>
                <p className="flex items-center justify-end mt-1">
                  <Wind size={20} className="mr-2" /> Wind:{" "}
                  {weatherData.windSpeed} km/h
                </p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-4 border-t border-white border-opacity-20 pt-4">
              5-Day Forecast
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {weatherData.forecast.map((day, index) => (
                <GlassCard
                  key={index}
                  className="flex flex-col items-center justify-center p-3 text-white"
                >
                  <p className="font-semibold text-lg">{day.day}</p>
                  <span className="text-4xl my-2">{day.icon}</span>
                  <p className="text-lg font-bold">{day.high}°C</p>
                  <p className="text-sm opacity-70">{day.low}°C</p>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </>
  );
}
