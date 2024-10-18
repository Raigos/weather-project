import dotenv from 'dotenv';
import { Weather as FullWeatherData } from '../types/WeatherTypes.js';

dotenv.config();

const API_KEY = process.env['OPENWEATHER_API_KEY'];
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// export async function getCurrentWeather(city: string) {
//   const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
//   if (!response.ok) {
//     throw new Error('Weather data fetch failed');
//   }
//   return response.json();
// }

export async function getCurrentWeather(city: string): Promise<FullWeatherData> {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Weather data fetch failed');
  }
  return response.json() as Promise<FullWeatherData>;
}

// export async function getForecast(city: string) {
//   const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
//   if (!response.ok) {
//     throw new Error('Forecast data fetch failed');
//   }
//   return response.json();
// }
