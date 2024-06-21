import { currentWeatherData } from '../api/generated/openWeather.ts';

export const fetchWeatherData = (lat: string, lon: string, apiKey: string) => {
  return currentWeatherData({ lat: lat, lon: lon, units: 'metric', appid: apiKey });
};
