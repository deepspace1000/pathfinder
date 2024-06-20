import { Button, Card, Grid, Typography, styled } from '@mui/joy';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { N200, currentWeatherData } from '../api/generated/openWeather.ts';
import searcgicon from '../assets/homepage/search_icon.svg';
import { CurrencyExchange } from '../components/CurrencyExchange.tsx';

type TimeResponse = {
  localTime: string;
};

export function DetailPage() {
  const { region } = useParams();
  const WEATHER_API_KEY = `${import.meta.env.VITE_WEATHER_API}`;
  const TIME_API_KEY = `${import.meta.env.VITE_TIME_API}`;
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [displayedDate, setDisplayedDate] = useState('');
  const [displayedTime, setDisplayedTime] = useState('');
  const [time, setTime] = useState<TimeResponse | null>(null);
  const [weather, setWeather] = useState<N200 | undefined>();

  // on region
  useEffect(() => {
    if (region) {
      fetchLatLong()
        .then((result) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          const { lat, lon }: { lat: string; lon: string } = result.data[0] || {};
          setLat(lat);
          setLon(lon);
        })
        .catch((error) => console.log(error));
    }
  }, [region]);

  // on lat/lon
  useEffect(() => {
    if (lat && lon) {
      getCurrentTime()
        .then((result) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setTime(result.data);
        })
        .catch((error) => console.log(error));
      fetchWeatherData();
    }
  }, [lat]);

  // on Time
  useEffect(() => {
    if (time && time.localTime) {
      console.log(time);
      console.log(time.localTime);
      setDisplayedDate(time.localTime.substring(0, 10));
      setDisplayedTime(time.localTime.substring(11, 19));
    }
  }, [time]);

  const fetchLatLong = async () => {
    return await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${region}&limit=1&appid=${WEATHER_API_KEY}`,
    );
  };

  const fetchWeatherData = () => {
    const data = currentWeatherData({ lat: lat, lon: lon, units: 'metric', appid: WEATHER_API_KEY });
    data.then((result) => setWeather(result.data)).catch((error) => console.log(error));
  };

  const getCurrentTime = async () => {
    return await axios.get(
      `https://api-bdc.net/data/timezone-by-location?latitude=${lat}&longitude=${lon}&key=${TIME_API_KEY}`,
    );
  };

  return (
    <>
      <Grid container sx={{ flexGrow: 1, maxWidth: '100%', justifyContent: 'center' }}>
        <Grid xs={12} sx={{ position: 'relative', padding: '1rem 5rem', flexWrap: 'nowrap' }}>
          <Typography level={'h1'} component={'h1'} display={'inline'}>
            {region}
          </Typography>
          <DecorTopRight>
            <img src={searcgicon} alt={'time-icon'} />
          </DecorTopRight>
        </Grid>

        <CardGrid>
          <WeatherCard>
            <CardHeader>Weather</CardHeader>
            <WeatherInfoCard sx={{ height: '200px' }}>
              <table>
                <tbody>
                  <tr>
                    <td>Description:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.weather?.[0].description}</td>
                  </tr>
                  <tr>
                    <td>Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.main?.temp}°</td>
                  </tr>
                  <tr>
                    <td>Feels like:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.main?.feels_like}°</td>
                  </tr>
                  <tr>
                    <td>Humidity:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.main?.humidity}%</td>
                  </tr>
                  <tr>
                    <td>Max Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.main?.temp_max}°</td>
                  </tr>
                  <tr>
                    <td>Min Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{weather?.main?.temp_min}°</td>
                  </tr>
                </tbody>
              </table>
            </WeatherInfoCard>
          </WeatherCard>
          <CurrencyExchange></CurrencyExchange>
          <TimeCard>
            <CardHeader>Current Time</CardHeader>
            <TimeInfoCard sx={{ height: '140px', fontSize: '32px', display: 'flex' }}>
              <div>{displayedTime}</div>
              <div>{displayedDate}</div>
            </TimeInfoCard>
          </TimeCard>
        </CardGrid>

        <a href={'/'}>
          <ReturnButton>Return Home</ReturnButton>
        </a>
      </Grid>
    </>
  );
}

const ReturnButton = styled(Button)`
  border-radius: 0;
  border-top-right-radius: 30px;
  height: 5rem;
  width: 15rem;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const DecorTopRight = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  padding: 50px 40px;
  border-bottom-left-radius: 80px;
  background-color: var(--dark-primary);
`;

const WeatherCard = styled(Card)`
  background: #76bdd6;
  width: 280px;
  height: 320px;
  border: 0;
`;

const TimeCard = styled(Card)`
  background: #76bdd6;
  width: 250px;
  height: 260px;
  margin-left: 20px;
  border: 0;
`;

const CardHeader = styled(Card)`
  height: 75px;
  border: 0;
  font-family: 'Syne', 'sans-serif';
  background-color: #053c51;
  font-size: 30px;
  color: white;
  align-items: center;
  justify-content: center;
`;

const TimeInfoCard = styled(Card)`
  border: 0;
  background-color: #053c51;
  color: white;
  font-size: 50px;
  align-items: center;
  justify-content: center;
`;

const WeatherInfoCard = styled(Card)`
  border: 0;
  font-family: 'Syne', 'sans-serif';
  background-color: #053c51;
  color: white;
`;

const CardGrid = styled('div')`
  margin-top: 2rem;
  width: 1070px;
  display: flex;
`;
