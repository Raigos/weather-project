import { Weather as FullWeatherData } from './WeatherTypes';

export type WeatherData = {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
};

export function transformWeatherData(data: FullWeatherData): WeatherData {
  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0]?.description ?? 'No description available',
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}
