import { config } from './config';

console.log('OPENWEATHER_API_KEY:', config.OPENWEATHER_API_KEY);

if (config.OPENWEATHER_API_KEY) {
  console.log('API key is loaded successfully!');
} else {
  console.log('API key is not set. Please check your .env file.');
}
