"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation'

const WeatherAppContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [weatherData, setWeatherData] = useState(null);
  const [userPreferredUnit, setUserPreferredUnit] = useState('Celsius'); // Default to 'Celsius'

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setWeatherData(parsedData);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    }
  }, [searchParams]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { city, temp: tempInCelsius, feelsLike: feelsLikeInCelsius, mainCondition } = weatherData;

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
  const feelsLike = convertTemperature(feelsLikeInCelsius, userPreferredUnit);
  const unitSymbol = getUnitSymbol(userPreferredUnit);

  // Function to handle summary redirection
  const handleSummaryClick = async () => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date().toLocaleDateString('en-CA', options).split('-').join('-'); // 'YYYY-MM-DD' format
    console.log(date);
    // Use the formatted date in your API URL
    const apiUrl = `http://localhost:8080/api/weather/summary/${encodeURIComponent(city)}/${date}`;

    try {
      console.log('Fetching weather summary from:', apiUrl);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather summary');
      }

      const summaryData = await response.json();
      const summaryDataString = encodeURIComponent(JSON.stringify(summaryData));
      const summaryUrl = `/weathersummary?city=${encodeURIComponent(city)}&date=${date}&summaryData=${summaryDataString}`;

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
                src="http://openweathermap.org/img/wn/03d@2x.png" 
                alt="scattered clouds"
                className="w-16 h-16"
              />
            </div>
            <div className="ml-4">
              <p className="text-[2.4rem] font-bold text-gray-800">{temp.toFixed(1)}°{unitSymbol}</p>
              <p className="text-base text-gray-600 capitalize">{mainCondition}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="flex items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#007bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13m-7 6h7"/>
                </svg>
                Feels like: {feelsLike.toFixed(1)}°{unitSymbol}
              </p>
            </div>
          </div>
        </div>

        {/* Check Summary Button */}
        <div className="p-4">
          <button
            onClick={handleSummaryClick}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Check Summary
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component with Suspense
const WeatherAppPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherAppContent />
    </Suspense>
  );
};

export default WeatherAppPage;
