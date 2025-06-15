import React from 'react';

/**
 * PUBLIC_INTERFACE
 * RealTimeData component.
 * Placeholder integration points for NASA Open APIs, OpenWeatherMap, and World Bank.
 */
function RealTimeData() {
  return (
    <div>
      {/* This component will visualize real-time or recent data (science, climate, global stats, etc.) */}
    </div>
  );
}

// =================== API INTEGRATION HOOKS & FUNCTIONS =======================

// ---- NASA Open APIs ----
/**
 * PUBLIC_INTERFACE
 * Fetches NASA Astronomy Picture of the Day.
 * API Docs: https://api.nasa.gov/
 * Example usage:
 *    const data = await getNasaApod();
 */
export async function getNasaApod() {
  // Endpoint: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  // TODO: Replace DEMO_KEY with your API key if needed.
  const apiKey = 'DEMO_KEY'; // TODO: Replace for production usage
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  // const response = await fetch(url);
  // const json = await response.json();
  // return json;
  return { title: "[TODO: NASA APOD]", url: "", explanation: "" };
}

// ---- OpenWeatherMap API ----
/**
 * PUBLIC_INTERFACE
 * Fetches current weather by city from OpenWeatherMap API.
 * Docs: https://openweathermap.org/current
 * Example usage:
 *    const weather = await getWeather('London');
 */
export async function getWeather(city) {
  // Endpoint: https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
  // TODO: Replace 'YOUR_API_KEY' with real key; handle metric/imperial units, errors, etc.
  const apiKey = 'YOUR_API_KEY'; // TODO
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
  // const response = await fetch(url);
  // const json = await response.json();
  // return json;
  return { main: { temp: 0 }, weather: [{ description: "[TODO: Weather]" }] };
}

// ---- World Bank API ----
/**
 * PUBLIC_INTERFACE
 * Fetches World Bank indicator data (e.g. population).
 * API Docs: https://data.worldbank.org/developers/api-overview
 * Example usage:
 *    const data = await getWorldBankIndicator('SP.POP.TOTL', 'US');
 */
export async function getWorldBankIndicator(indicator, countryCode) {
  // Endpoint: http://api.worldbank.org/v2/country/US/indicator/SP.POP.TOTL?format=json
  // TODO: Handle paging, errors, JSON structure.
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
  // const response = await fetch(url);
  // const json = await response.json();
  // return json;
  return [{ indicator: indicator, country: countryCode, value: "[TODO: Value]" }];
}

export default RealTimeData;
