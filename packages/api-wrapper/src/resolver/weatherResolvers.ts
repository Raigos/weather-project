// import { Resolvers } from '@api-wrapper/resolver/resolvers-types';
import { Resolvers } from './resolvers-types';

// import { getCurrentWeather } from '@api-wrapper/service/openWeatherApi';
import { getCurrentWeather } from '../service/openWeatherApi.js';

// import { transformWeatherData, WeatherData } from '@api-wrapper/types/WeatherDataTransform';
import { transformWeatherData, WeatherData } from '../types/WeatherDataTransform.js';

// import { Weather as FullWeatherData } from '@api-wrapper/types/WeatherTypes';
import { Weather as FullWeatherData } from '../types/WeatherTypes.js';

export const resolvers: Resolvers = {
  Query: {
    currentWeather: async (_, args): Promise<WeatherData> => {
      const weatherData: FullWeatherData = await getCurrentWeather(args.city);
      return transformWeatherData(weatherData);
    },
  },
};
