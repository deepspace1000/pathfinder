import axios from 'axios';

type GeoInfo = {
  name: string;
  local_names: { [key: string]: string };
  lat: string;
  lon: string;
  country: string;
  state: string;
};

export const fetchLatLong = async (region: string, apiKey: string) => {
  const response = await axios.get<GeoInfo[]>(
    `https://api.openweathermap.org/geo/1.0/direct?q=${region}&limit=1&appid=${apiKey}`,
  );

  return response.data[0];
};
