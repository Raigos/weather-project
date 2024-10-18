import { resolvers } from './weatherResolvers'; // Import your resolvers
import * as openWeatherApi from '../service/openWeatherApi';
import mockWeatherData from '../__mocks__/weatherApiResponse.json'; // Import your mock data

// Mock the entire module
jest.mock('../service/openWeatherApi');

describe('Weather Resolvers', () => {
  // Cast the mocked function to the correct type
  const mockedGetCurrentWeather = openWeatherApi.getCurrentWeather as jest.MockedFunction<
    typeof openWeatherApi.getCurrentWeather
  >;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should return transformed weather data for a given city', async () => {
    // Set up the mock to return our mock data
    mockedGetCurrentWeather.mockResolvedValue(mockWeatherData);

    // Call the resolver
    // @ts-ignore:next-line
    const result = await resolvers.Query.currentWeather(null, { city: 'London' }, null, null);

    // Check that getCurrentWeather was called with the correct argument
    expect(mockedGetCurrentWeather).toHaveBeenCalledWith('London');

    // Check that the data was transformed correctly
    expect(result).toEqual({
      city: mockWeatherData.name,
      temperature: mockWeatherData.main.temp,
      description: mockWeatherData.weather[0].description,
      humidity: mockWeatherData.main.humidity,
      windSpeed: mockWeatherData.wind.speed,
    });
  });
});
