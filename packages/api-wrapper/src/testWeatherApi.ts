import { getCurrentWeather } from './service/openWeatherApi.js';

async function testWeatherApi() {
  try {
    const weatherData = await getCurrentWeather('London');
    console.log('Weather data:', weatherData);
  } catch (error) {
    console.error('Error:', error);
  }
}

testWeatherApi();
