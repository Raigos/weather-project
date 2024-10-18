import React from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { WeatherCard } from './weatherCard';
import { useWeatherQuery } from '../hooks/useWeatherQuery';

interface WeatherCardContainerProps {
  city: string;
}

export const WeatherCardContainer: React.FC<WeatherCardContainerProps> = ({ city }) => {
  const { loading, error, data } = useWeatherQuery(city);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  const weatherData = data?.currentWeather;

  return <>{weatherData && <WeatherCard weatherData={weatherData} />}</>;
};
