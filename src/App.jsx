import './App.css';
import Header from './components/header/Header';
import Today from './components/weather/Today';
import Menu from './components/menu/Menu';
import { Routes, Route } from 'react-router-dom';

import Daily from './components/weather/daily/Daily';
import Weekly from './components/weather/weekly/Weekly';
import SwitchMenu from './components/menu/SwitchMenu';
import { useEffect, useState } from 'react';

import axios from 'axios';
function App() {
  const [selectedCity, setSelectedCity] = useState('PARIS');
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedCurrentForecast, setFetchedCurrentForecast] = useState([]);

  // console.log('geolocation', geolocation);

  const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
  useEffect(() => {
    const getForecast = async () => {
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&appid=${apiKey}`,
      );
      setFetchedData(forecast);
    };
    getForecast();
  }, [selectedCity]);

  useEffect(() => {
    const getCurrentWeather = async () => {
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`,
      );
      setFetchedCurrentForecast(currentWeather);
    };
    getCurrentWeather();
  }, [selectedCity]);

  // console.log('FETCHDATA', fetchedData.data);
  // console.log('fetchedCurrentForecast', fetchedCurrentForecast.data);

  return (
    <div className="App">
      <div className="container">
        <Header setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
        {/*

        {fetchedData.data && (
          <Today
            currentWeather={currentWeather}
            forecasts={fetchedData.data}
          ></Today>
        )}
        {fetchedData.data && (
          <Daily
            currentWeather={currentWeather}
            forecasts={fetchedData.data}
          ></Daily>
        )}
        {fetchedData.data && <Weekly forecasts={fetchedData.data}></Weekly>}
*/}

        {fetchedData.data && fetchedCurrentForecast.data && (
          <Routes>
            <Route
              path="/"
              element={
                <Today
                  currentWeather={fetchedCurrentForecast.data}
                  forecasts={fetchedData.data}
                  selectedCity={selectedCity}
                />
              }
            />
          </Routes>
        )}
        <SwitchMenu></SwitchMenu>
      </div>
      <Menu></Menu>
    </div>
  );
}

export default App;
