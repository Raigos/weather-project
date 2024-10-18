import { useState } from 'react';
import { SearchBar } from './components/searchbar';
import { WeatherCardContainer } from './components/weatherCardContainer';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const App: React.FC = () => {
  const [searchedCities, setSearchedCities] = useState<string[]>([]);

  const handleSearch = (city: string) => {
    if (!searchedCities.includes(city)) {
      setSearchedCities((prevCities) => [...prevCities, city]);
    }
  };

  return (
    <ApolloProvider client={client}>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column" align-items="center">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h4" component="h2" gutterBottom>
              Weather Information
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Grid container spacing={3}>
              {searchedCities.map((city, index) => (
                <Grid key={`${city}-${index}`} xs={12} sm={6} md={4} lg={3}>
                  <WeatherCardContainer city={city} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ApolloProvider>
  );
};

export default App;
