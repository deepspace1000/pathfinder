import { defineConfig } from 'orval';

export default defineConfig({
  openWeather: {
    input: './src/api/spec/open-weather.yaml',
    output: {
      target: './src/api/generated/openWeather.ts',
      baseUrl: 'https://api.openweathermap.org/data/2.5/',
    },
  },
});
