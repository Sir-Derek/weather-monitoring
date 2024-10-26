"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

const Preferences = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("unit");
  const [alertOn, setAlertOn] = useState(false); // Changed to alertOn
  const [unit, setUnit] = useState('Celsius');
  const [city, setCity] = useState("Delhi");
  const [email, setEmail] = useState("");
  const [minTemp, setMinTemp] = useState(''); // Initialize as an empty string
  const [maxTemp, setMaxTemp] = useState(''); // Initialize as an empty string

  const handleSubmit = async (e) => {
    e.preventDefault();

    const preferences = {
      city,
      email,
      unit,
      minTemperature: alertOn ? minTemp : null, // Updated to alertOn
      maxTemperature: alertOn ? maxTemp : null, // Updated to alertOn
      alertOn // Updated to alertOn
    };

    console.log("Preferences:", preferences);

    // API call to save preferences
    try {
      const response = await fetch('http://localhost:8080/api/preferences/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
      });

      if (response.ok) {
        console.log("Preferences saved successfully!");

        // Fetch weather data for the selected city
        const weatherResponse = await fetch(`http://localhost:8080/api/weather/current/${city}`);
        
        if (weatherResponse.ok) {
          const weatherData = await weatherResponse.json();
          console.log("Fetched Weather Data:", weatherData); // Debugging log

          // Construct data to send, including mainCondition, temp, feelsLike, date, city, and unit
          const dataToSend = {
            mainCondition: weatherData.mainCondition,
            temp: weatherData.temp,
            feelsLike: weatherData.feelsLike,
            date: weatherData.date,
            city,
            unit,
          };

          // Navigate to the weather page and pass the weather data as a query parameter
          router.push(`/weatherpage?data=${encodeURIComponent(JSON.stringify(dataToSend))}`);
        } else {
          console.error("Failed to fetch weather data.", weatherResponse.status);
          const errorData = await weatherResponse.text();
          console.error("Error Response:", errorData);
        }
      } else {
        console.error("Failed to save preferences.", response.status);
        const errorData = await response.text();
        console.error("Error Response:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f3e8ff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]">
      <div className="w-full max-w-[32rem] bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-[1.875rem] font-bold text-[#3b82f6] m-0">Weather Monitor</h1>
          <p className="text-[#64748b] mt-2">Set up your weather monitoring preferences</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="city" className="block text-sm font-medium mb-2 text-black">City</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full py-2 px-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
              required
            >
              {/* City options */}
              {["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"].map(cityOption => (
                <option key={cityOption} value={cityOption}>{cityOption}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-black text-sm font-medium mb-2">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-3">📧</span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                required
              />
            </div>
          </div>

          {/* Tab Navigation for Units and Alerts */}
          <div className="flex mb-4">
            <div
              className={`flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200 ${activeTab === "unit" ? "bg-[#3b82f6] text-white" : "bg-[#f1f5f9] text-[#64748b]"}`}
              onClick={() => setActiveTab("unit")}
            >
              Temperature Unit
            </div>
            <div
              className={`flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200 ${activeTab === "alerts" ? "bg-[#3b82f6] text-white" : "bg-[#f1f5f9] text-[#64748b]"}`}
              onClick={() => setActiveTab("alerts")}
            >
              Alerts
            </div>
          </div>

          {/* Unit Selection */}
          <div className={`${activeTab === "unit" ? "block" : "hidden"}`}>
            <div className="mb-6">
              <label className="block text-sm text-black font-medium mb-2">Select Unit</label>
              <div className="flex gap-4">
                {["Celsius", "Fahrenheit", "Kelvin"].map((unitOption) => (
                  <label key={unitOption} className="flex text-black items-center cursor-pointer">
                    <input
                      type="radio"
                      name="unit"
                      value={unitOption}
                      checked={unit === unitOption}
                      onChange={() => setUnit(unitOption)}
                      className="mr-2"
                      required
                    />
                    {unitOption} ({unitOption === "Celsius" ? "°C" : unitOption === "Fahrenheit" ? "°F" : "K"})
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts Section */}
          <div className={`${activeTab === "alerts" ? "block" : "hidden"}`}>
            <div className="mb-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={alertOn} // Updated to alertOn
                  onChange={(e) => setAlertOn(e.target.checked)} // Ensure state updates immediately
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b82f6]"></div>
                <span className="ml-3 text-sm font-medium text-black">Enable temperature alerts</span>
              </label>
            </div>

            {alertOn && ( // Updated to alertOn
              <div className="space-y-6">
                <div className="relative">
                  <label htmlFor="minTemperature" className="text-black block text-sm font-medium mb-2">Minimum Temperature (Celsius)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3">🌡️</span>
                    <input
                      type="number"
                      id="minTemperature"
                      value={minTemp}
                      onChange={(e) => setMinTemp(e.target.value)}
                      placeholder="Min Temp"
                      className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="maxTemperature" className="text-black block text-sm font-medium mb-2">Maximum Temperature (Celsius)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3">🌡️</span>
                    <input
                      type="number"
                      id="maxTemperature"
                      value={maxTemp}
                      onChange={(e) => setMaxTemp(e.target.value)}
                      placeholder="Max Temp"
                      className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white py-2 rounded transition-colors duration-200 hover:bg-[#2563eb]"
          >
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preferences;
