import { gql, useQuery, QueryResult } from '@apollo/client';
import { WeatherData } from '../interfaces/WeatherDataTypes';

const CURRENT_WEATHER_QUERY = gql`
  query CurrentWeatherQuery($city: String!) {
    currentWeather(city: $city) {
      city
      temperature
      description
      humidity
      windSpeed
    }
  }
`;

interface CurrentWeatherResponse {
  currentWeather: WeatherData;
}

export function useWeatherQuery(city: string): QueryResult<CurrentWeatherResponse> {
  return useQuery<CurrentWeatherResponse>(CURRENT_WEATHER_QUERY, {
    variables: { city },
  });
}
