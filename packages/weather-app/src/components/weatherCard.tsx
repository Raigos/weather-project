import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import { WeatherData } from '../interfaces/WeatherDataTypes';
import { useWeatherQuery } from '../hooks/useWeatherQuery';

export function WeatherCard({ weatherData }: { weatherData: WeatherData }) {
  const { city, temperature, humidity, windSpeed, description } = weatherData;
  const { loading, error } = useWeatherQuery(city);

  const formattedTemperature = Math.round(temperature * 10) / 10;

  if (loading) {
    return (
      <Card
        sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CircularProgress />
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography color="error">Error: {error.message}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          {formattedTemperature}°C
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThermostatIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{formattedTemperature}°C</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <OpacityIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{humidity}%</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AirIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{windSpeed} m/s</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
