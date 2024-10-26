"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const WeatherAppContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [weatherData, setWeatherData] = useState(null);
  const [userPreferredUnit, setUserPreferredUnit] = useState('Celsius'); // Default to 'Celsius'
  const [selectedDate, setSelectedDate] = useState('');

  // Calculate the minimum date (20 days ago) for the date picker
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 20);
  const minDateString = minDate.toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'

  useEffect(() => {
    const data = searchParams.get('summaryData');
    const dateParam = searchParams.get('date'); // Get date from URL parameters
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data));
        setWeatherData(parsedData);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    }

    // Set the selected date from URL parameters if available
    if (dateParam) {
      setSelectedDate(dateParam);
    } else {
      // Set today's date as default selected date
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedToday = new Date().toLocaleDateString('en-CA', options).split('-').join('-');
      setSelectedDate(formattedToday);
    }
  }, [searchParams]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { city, avgTemp: tempInCelsius, minTemp, maxTemp, dominantCondition } = weatherData;

  const convertTemperature = (temp, unit) => {
    switch (unit) {
      case 'Fahrenheit':
        return (temp * 9 / 5) + 32;
      case 'Kelvin':
        return temp + 273.15;
      default: // Celsius
        return temp;
    }
  };

  const getUnitSymbol = (unit) => {
    switch (unit) {
      case 'Fahrenheit':
        return 'F';
      case 'Kelvin':
        return 'K';
      default:
        return 'C';
    }
  };

  const temp = convertTemperature(tempInCelsius, userPreferredUnit);
  const unitSymbol = getUnitSymbol(userPreferredUnit);

  const handleSummaryClick = async () => {
    const apiUrl = `http://localhost:8080/api/weather/summary/${encodeURIComponent(city)}/${selectedDate}`;
    // const apiUrl = `http://localhost:8080/api/weather/summary/${encodeURIComponent(city)}/${selectedDate}`;
    console.log("API URL:", apiUrl);
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorResponse = await response.text(); // Read the error response body
        throw new Error(`Failed to fetch weather summary: ${response.statusText} - ${errorResponse}`);
      }
  
      const summaryData = await response.json();
      const summaryDataString = encodeURIComponent(JSON.stringify(summaryData));
      const summaryUrl = `/weathersummary?city=${encodeURIComponent(city)}&date=${selectedDate}&summaryData=${summaryDataString}`;
  
      // Use router.push for navigation
      router.push(summaryUrl);
    } catch (error) {
      console.error('Error fetching weather summary:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Card Header */}
        <div className="bg-[#007bff] text-white p-4 text-center">
          <h1 className="text-[1.8rem] font-bold">{city}</h1>
        </div>

        {/* Temperature Unit Selection */}
        <div className="flex justify-center gap-6 p-4">
          <button onClick={() => setUserPreferredUnit('Celsius')} className={`mr-2 ${userPreferredUnit === 'Celsius' ? 'text-blue-500' : 'text-gray-600'}`}>Celsius</button>
          <button onClick={() => setUserPreferredUnit('Fahrenheit')} className={`mr-2 ${userPreferredUnit === 'Fahrenheit' ? 'text-blue-500' : 'text-gray-600'}`}>Fahrenheit</button>
          <button onClick={() => setUserPreferredUnit('Kelvin')} className={`${userPreferredUnit === 'Kelvin' ? 'text-blue-500' : 'text-gray-600'}`}>Kelvin</button>
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Weather Main */}
          <div className="flex justify-between items-center mb-4">
            <div className="weather-icon">
              <img 
                src={`http://openweathermap.org/img/wn/03d@2x.png`} 
                alt={dominantCondition}
                className="w-16 h-16"
              />
            </div>
            <div className="ml-4">
              <p className="text-[2.4rem] font-bold text-gray-800">{temp.toFixed(1)}°{unitSymbol}</p>
              <p className="text-base text-gray-600 capitalize">{dominantCondition}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="flex items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#007bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13m-7 6h7"/>
                </svg>
                Min: {convertTemperature(minTemp, userPreferredUnit).toFixed(1)}°{unitSymbol}
              </p>
              <p className="flex items-center flex-col">
                Max: {convertTemperature(maxTemp, userPreferredUnit).toFixed(1)}°{unitSymbol}
              </p>
            </div>
          </div>
        </div>

        {/* Date Picker and Check Summary Button */}
        <div className="p-4">
  {/* Date Picker */}
  <label className="block text-gray-700 mb-2">Select Date:</label>
  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    min={minDateString} // Set the minimum date to 20 days ago
    max={today.toISOString().split('T')[0]} // Set the maximum date to today
    className="border rounded p-2 w-full mb-4 text-black" // Add text-black class
  />
  <button 
    onClick={handleSummaryClick} 
    className="w-full bg-[#007bff] text-white p-2 rounded hover:bg-[#0056b3] transition-colors"
  >
    Check Summary
  </button>
</div>

      </div>
    </div>
  );
};

export default WeatherAppContent;


