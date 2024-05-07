import { Button, Card, Grid, Typography, styled } from '@mui/joy';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searcgicon from '../assets/homepage/search_icon.svg';
import { CurrencyExchange } from '../components/CurrencyExchange.tsx';

type TimeResponse = {
  localTime: string;
};

export function DetailPage() {
  const { region } = useParams();
  const WEATHER_API_KEY = `${import.meta.env.VITE_WEATHER_API}`;
  const TIME_API_KEY = `${import.meta.env.VITE_TIME_API}`;
  const [getLat, setLat] = useState('');
  const [getLon, setLon] = useState('');
  const [getDisplayedDate, setDisplayedDate] = useState('');
  const [getDisplayedTime, setDisplayedTime] = useState('');
  const [getTime, setTime] = useState<TimeResponse | null>(null);
  const [getTemp, setTemp] = useState('');
  const [getFeelsLikeTemp, setFeelsLikeTemp] = useState('');
  const [getHumidity, setHumidity] = useState('');
  const [getMaxTemp, setMaxTemp] = useState('');
  const [getMinTemp, setMinTemp] = useState('');
  const [getDescription, setDescription] = useState('');
  const [getWeather, setWeather] = useState([]);

  // on region
  useEffect(() => {
    if (region) {
      getLatLong();
    }
  }, [region]);

  // on lat/lon
  useEffect(() => {
    if (getLat && getLon) {
      console.log('Latitude:', getLat);
      console.log('Longitude:', getLon);
      getCurrentTime();
      getWeatherData();
    }
  }, [getLat]);

  // on Time
  useEffect(() => {
    if (getTime && getTime.localTime) {
      console.log(getTime);
      console.log(getTime.localTime);
      setDisplayedDate(getTime.localTime.substring(0, 10));
      setDisplayedTime(getTime.localTime.substring(11, 19));
    }
  }, [getTime]);

  // on Weather
  useEffect(() => {
    if (getWeather.main) {
      console.log(getWeather);
      setTemp(getWeather.main.temp);
      setMaxTemp(getWeather.main.temp_max);
      setMinTemp(getWeather.main.temp_min);
      setFeelsLikeTemp(getWeather.main.feels_like);
      setHumidity(getWeather.main.humidity);
      setDescription(getWeather.weather[0].description);
    }
  }, [getWeather]);

  const getLatLong = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${region}&limit=1&appid=${WEATHER_API_KEY}`,
      );
      let lat = response.data[0]?.lat;
      let lon = response.data[0]?.lon;
      setLat(lat);
      setLon(lon);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${getLat}&lon=${getLon}&units=metric&appid=${WEATHER_API_KEY}`,
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getCurrentTime = async () => {
    try {
      const response = await axios.get(
        `https://api-bdc.net/data/timezone-by-location?latitude=${getLat}&longitude=${getLon}&key=${TIME_API_KEY}`,
      );
      setTime(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
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
                    <td style={{ textAlign: 'right' }}>{getDescription}</td>
                  </tr>
                  <tr>
                    <td>Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{getTemp}°</td>
                  </tr>
                  <tr>
                    <td>Feels like:</td>
                    <td style={{ textAlign: 'right' }}>{getFeelsLikeTemp}°</td>
                  </tr>
                  <tr>
                    <td>Humidity:</td>
                    <td style={{ textAlign: 'right' }}>{getHumidity}%</td>
                  </tr>
                  <tr>
                    <td>Max Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{getMaxTemp}°</td>
                  </tr>
                  <tr>
                    <td>Min Temp.:</td>
                    <td style={{ textAlign: 'right' }}>{getMinTemp}°</td>
                  </tr>
                </tbody>
              </table>
            </WeatherInfoCard>
          </WeatherCard>
          <CurrencyExchange></CurrencyExchange>
          <TimeCard>
            <CardHeader>Current Time</CardHeader>
            <TimeInfoCard sx={{ height: '140px', fontSize: '32px', display: 'flex' }}>
              <div>{getDisplayedTime}</div>
              <div>{getDisplayedDate}</div>
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
