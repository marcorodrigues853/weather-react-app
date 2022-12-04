import './App.css'
import Header from './components/header/Header'
import Today from './components/weather/Today'
import Menu from './components/menu/Menu'

import Daily from './components/weather/daily/Daily'
import Weekly from './components/weather/weekly/Weekly'
import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    const getForecast = async () => {
      const forecast = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=porto&units=metric&appid=ecf27fbed0f95dd7161d1a1aaea268df',
      )
      setFetchedData(forecast)
    }
    getForecast()
  }, [null])

  console.log(fetchedData.data)

  const currentWeather = {
    coord: {
      lon: -8.611,
      lat: 41.1496,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 10.2,
      feels_like: 9.5,
      temp_min: 9.05,
      temp_max: 12.47,
      pressure: 1008,
      humidity: 85,
    },
    visibility: 10000,
    wind: {
      speed: 4.12,
      deg: 100,
    },
    clouds: {
      all: 40,
    },
    dt: 1670149897,
    sys: {
      type: 2,
      id: 2035417,
      country: 'PT',
      sunrise: 1670139805,
      sunset: 1670173569,
    },
    timezone: 0,
    id: 2735943,
    name: 'Porto',
    cod: 200,
  }
  const forecasts = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1670155200,
        main: {
          temp: 10.2,
          feels_like: 9.5,
          temp_min: 10.2,
          temp_max: 13.61,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 997,
          humidity: 85,
          temp_kf: -3.41,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 40,
        },
        wind: {
          speed: 5.05,
          deg: 180,
          gust: 7.16,
        },
        visibility: 10000,
        pop: 0.36,
        rain: {
          '3h': 0.23,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-04 12:00:00',
      },
      {
        dt: 1670166000,
        main: {
          temp: 11.65,
          feels_like: 10.88,
          temp_min: 11.65,
          temp_max: 14.56,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 996,
          humidity: 77,
          temp_kf: -2.91,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 31,
        },
        wind: {
          speed: 4.73,
          deg: 200,
          gust: 6.35,
        },
        visibility: 10000,
        pop: 0.36,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-04 15:00:00',
      },
      {
        dt: 1670176800,
        main: {
          temp: 11.81,
          feels_like: 11,
          temp_min: 11.81,
          temp_max: 12.62,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 997,
          humidity: 75,
          temp_kf: -0.81,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 22,
        },
        wind: {
          speed: 2.1,
          deg: 156,
          gust: 3.09,
        },
        visibility: 10000,
        pop: 0.31,
        rain: {
          '3h': 0.17,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-04 18:00:00',
      },
      {
        dt: 1670187600,
        main: {
          temp: 11.98,
          feels_like: 11.09,
          temp_min: 11.98,
          temp_max: 11.98,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 998,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 81,
        },
        wind: {
          speed: 2.73,
          deg: 102,
          gust: 5.09,
        },
        visibility: 10000,
        pop: 0.26,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-04 21:00:00',
      },
      {
        dt: 1670198400,
        main: {
          temp: 11.04,
          feels_like: 10.29,
          temp_min: 11.04,
          temp_max: 11.04,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 998,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 4.01,
          deg: 99,
          gust: 7.83,
        },
        visibility: 10000,
        pop: 0.37,
        rain: {
          '3h': 0.25,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-05 00:00:00',
      },
      {
        dt: 1670209200,
        main: {
          temp: 11.12,
          feels_like: 10.4,
          temp_min: 11.12,
          temp_max: 11.12,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 996,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 4.97,
          deg: 85,
          gust: 9.57,
        },
        visibility: 10000,
        pop: 0.66,
        rain: {
          '3h': 0.42,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-05 03:00:00',
      },
      {
        dt: 1670220000,
        main: {
          temp: 10.6,
          feels_like: 10.01,
          temp_min: 10.6,
          temp_max: 10.6,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 995,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 4.55,
          deg: 84,
          gust: 9.87,
        },
        visibility: 10000,
        pop: 0.87,
        rain: {
          '3h': 2.67,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-05 06:00:00',
      },
      {
        dt: 1670230800,
        main: {
          temp: 10.98,
          feels_like: 10.3,
          temp_min: 10.98,
          temp_max: 10.98,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 996,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.02,
          deg: 75,
          gust: 7.83,
        },
        visibility: 10000,
        pop: 0.88,
        rain: {
          '3h': 2.62,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-05 09:00:00',
      },
      {
        dt: 1670241600,
        main: {
          temp: 12.67,
          feels_like: 11.98,
          temp_min: 12.67,
          temp_max: 12.67,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 997,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.9,
          deg: 88,
          gust: 6.81,
        },
        visibility: 10000,
        pop: 0.89,
        rain: {
          '3h': 0.19,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-05 12:00:00',
      },
      {
        dt: 1670252400,
        main: {
          temp: 11.97,
          feels_like: 11.31,
          temp_min: 11.97,
          temp_max: 11.97,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 997,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.34,
          deg: 79,
          gust: 6.15,
        },
        visibility: 10000,
        pop: 0.2,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-05 15:00:00',
      },
      {
        dt: 1670263200,
        main: {
          temp: 11.17,
          feels_like: 10.54,
          temp_min: 11.17,
          temp_max: 11.17,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 998,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.33,
          deg: 82,
          gust: 5.92,
        },
        visibility: 10000,
        pop: 0.42,
        rain: {
          '3h': 0.41,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-05 18:00:00',
      },
      {
        dt: 1670274000,
        main: {
          temp: 11.07,
          feels_like: 10.53,
          temp_min: 11.07,
          temp_max: 11.07,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1000,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.8,
          deg: 84,
          gust: 4.76,
        },
        visibility: 10000,
        pop: 0.39,
        rain: {
          '3h': 0.81,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-05 21:00:00',
      },
      {
        dt: 1670284800,
        main: {
          temp: 11.35,
          feels_like: 10.79,
          temp_min: 11.35,
          temp_max: 11.35,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1001,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.29,
          deg: 88,
          gust: 3.32,
        },
        visibility: 10000,
        pop: 0.39,
        rain: {
          '3h': 0.24,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-06 00:00:00',
      },
      {
        dt: 1670295600,
        main: {
          temp: 11.6,
          feels_like: 11.04,
          temp_min: 11.6,
          temp_max: 11.6,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1001,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.81,
          deg: 92,
          gust: 2,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-06 03:00:00',
      },
      {
        dt: 1670306400,
        main: {
          temp: 11.26,
          feels_like: 10.66,
          temp_min: 11.26,
          temp_max: 11.26,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1002,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 81,
        },
        wind: {
          speed: 2.15,
          deg: 94,
          gust: 2.23,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-06 06:00:00',
      },
      {
        dt: 1670317200,
        main: {
          temp: 11.65,
          feels_like: 11.06,
          temp_min: 11.65,
          temp_max: 11.65,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 37,
        },
        wind: {
          speed: 2.34,
          deg: 110,
          gust: 2.83,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-06 09:00:00',
      },
      {
        dt: 1670328000,
        main: {
          temp: 13.06,
          feels_like: 12.54,
          temp_min: 13.06,
          temp_max: 13.06,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1004,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 2.21,
          deg: 128,
          gust: 3.65,
        },
        visibility: 10000,
        pop: 0.06,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-06 12:00:00',
      },
      {
        dt: 1670338800,
        main: {
          temp: 14.31,
          feels_like: 13.83,
          temp_min: 14.31,
          temp_max: 14.31,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1003,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 1.99,
          deg: 145,
          gust: 3.62,
        },
        visibility: 10000,
        pop: 0.22,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-06 15:00:00',
      },
      {
        dt: 1670349600,
        main: {
          temp: 13.39,
          feels_like: 12.95,
          temp_min: 13.39,
          temp_max: 13.39,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 1.68,
          deg: 154,
          gust: 2.38,
        },
        visibility: 10000,
        pop: 0.36,
        rain: {
          '3h': 0.38,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-06 18:00:00',
      },
      {
        dt: 1670360400,
        main: {
          temp: 12.67,
          feels_like: 12.21,
          temp_min: 12.67,
          temp_max: 12.67,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1004,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.13,
          deg: 139,
          gust: 2.56,
        },
        visibility: 10000,
        pop: 0.27,
        rain: {
          '3h': 0.32,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-06 21:00:00',
      },
      {
        dt: 1670371200,
        main: {
          temp: 11.74,
          feels_like: 11.24,
          temp_min: 11.74,
          temp_max: 11.74,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1003,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.18,
          deg: 128,
          gust: 2.5,
        },
        visibility: 10000,
        pop: 0.26,
        rain: {
          '3h': 0.19,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-07 00:00:00',
      },
      {
        dt: 1670382000,
        main: {
          temp: 11.16,
          feels_like: 10.58,
          temp_min: 11.16,
          temp_max: 11.16,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1003,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 53,
        },
        wind: {
          speed: 2.1,
          deg: 113,
          gust: 2.42,
        },
        visibility: 10000,
        pop: 0.09,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-07 03:00:00',
      },
      {
        dt: 1670392800,
        main: {
          temp: 10.57,
          feels_like: 9.9,
          temp_min: 10.57,
          temp_max: 10.57,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1001,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 35,
        },
        wind: {
          speed: 2.19,
          deg: 104,
          gust: 2.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-07 06:00:00',
      },
      {
        dt: 1670403600,
        main: {
          temp: 10.86,
          feels_like: 10.14,
          temp_min: 10.86,
          temp_max: 10.86,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1001,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 4,
        },
        wind: {
          speed: 2.43,
          deg: 100,
          gust: 2.97,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-07 09:00:00',
      },
      {
        dt: 1670414400,
        main: {
          temp: 14.41,
          feels_like: 13.63,
          temp_min: 14.41,
          temp_max: 14.41,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1000,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 26,
        },
        wind: {
          speed: 1.95,
          deg: 100,
          gust: 2.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-07 12:00:00',
      },
      {
        dt: 1670425200,
        main: {
          temp: 15.74,
          feels_like: 14.96,
          temp_min: 15.74,
          temp_max: 15.74,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 997,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 40,
        },
        wind: {
          speed: 1.42,
          deg: 71,
          gust: 2.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-07 15:00:00',
      },
      {
        dt: 1670436000,
        main: {
          temp: 13.77,
          feels_like: 13.03,
          temp_min: 13.77,
          temp_max: 13.77,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 996,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 70,
        },
        wind: {
          speed: 2.57,
          deg: 85,
          gust: 4.64,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-07 18:00:00',
      },
      {
        dt: 1670446800,
        main: {
          temp: 12.6,
          feels_like: 11.82,
          temp_min: 12.6,
          temp_max: 12.6,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 994,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.5,
          deg: 92,
          gust: 4.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-07 21:00:00',
      },
      {
        dt: 1670457600,
        main: {
          temp: 12.28,
          feels_like: 11.44,
          temp_min: 12.28,
          temp_max: 12.28,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 992,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.19,
          deg: 70,
          gust: 4.64,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-08 00:00:00',
      },
      {
        dt: 1670468400,
        main: {
          temp: 11.7,
          feels_like: 10.94,
          temp_min: 11.7,
          temp_max: 11.7,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 990,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.49,
          deg: 86,
          gust: 2.48,
        },
        visibility: 10000,
        pop: 0.65,
        rain: {
          '3h': 0.49,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-08 03:00:00',
      },
      {
        dt: 1670479200,
        main: {
          temp: 10.67,
          feels_like: 10.17,
          temp_min: 10.67,
          temp_max: 10.67,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 989,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.27,
          deg: 73,
          gust: 4.06,
        },
        visibility: 10000,
        pop: 0.89,
        rain: {
          '3h': 3.39,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-08 06:00:00',
      },
      {
        dt: 1670490000,
        main: {
          temp: 10.9,
          feels_like: 10.37,
          temp_min: 10.9,
          temp_max: 10.9,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 988,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.48,
          deg: 110,
          gust: 7.71,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 3.09,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-08 09:00:00',
      },
      {
        dt: 1670500800,
        main: {
          temp: 11.52,
          feels_like: 10.95,
          temp_min: 11.52,
          temp_max: 11.52,
          pressure: 999,
          sea_level: 999,
          grnd_level: 988,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.97,
          deg: 109,
          gust: 6.41,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 1.71,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-08 12:00:00',
      },
      {
        dt: 1670511600,
        main: {
          temp: 12.91,
          feels_like: 12.45,
          temp_min: 12.91,
          temp_max: 12.91,
          pressure: 998,
          sea_level: 998,
          grnd_level: 987,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 5.03,
          deg: 158,
          gust: 9.56,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 1.95,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-08 15:00:00',
      },
      {
        dt: 1670522400,
        main: {
          temp: 12.84,
          feels_like: 12.37,
          temp_min: 12.84,
          temp_max: 12.84,
          pressure: 999,
          sea_level: 999,
          grnd_level: 988,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 5.2,
          deg: 208,
          gust: 8.99,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          '3h': 3.73,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-08 18:00:00',
      },
      {
        dt: 1670533200,
        main: {
          temp: 12.22,
          feels_like: 11.72,
          temp_min: 12.22,
          temp_max: 12.22,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 989,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.23,
          deg: 195,
          gust: 9.33,
        },
        visibility: 10000,
        pop: 0.98,
        rain: {
          '3h': 3.2,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-08 21:00:00',
      },
      {
        dt: 1670544000,
        main: {
          temp: 11.55,
          feels_like: 11.01,
          temp_min: 11.55,
          temp_max: 11.55,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 990,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 5.85,
          deg: 170,
          gust: 9.64,
        },
        visibility: 10000,
        pop: 0.98,
        rain: {
          '3h': 1.7,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-09 00:00:00',
      },
      {
        dt: 1670554800,
        main: {
          temp: 11.14,
          feels_like: 10.56,
          temp_min: 11.14,
          temp_max: 11.14,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 989,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 5.1,
          deg: 150,
          gust: 8.27,
        },
        visibility: 10000,
        pop: 0.78,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-09 03:00:00',
      },
      {
        dt: 1670565600,
        main: {
          temp: 10.98,
          feels_like: 10.41,
          temp_min: 10.98,
          temp_max: 10.98,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 990,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 4.44,
          deg: 133,
          gust: 6.89,
        },
        visibility: 10000,
        pop: 0.6,
        rain: {
          '3h': 0.14,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-12-09 06:00:00',
      },
      {
        dt: 1670576400,
        main: {
          temp: 11.09,
          feels_like: 10.45,
          temp_min: 11.09,
          temp_max: 11.09,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 991,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 2.67,
          deg: 93,
          gust: 5.11,
        },
        visibility: 10000,
        pop: 0.28,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-12-09 09:00:00',
      },
    ],
    city: {
      id: 2735943,
      name: 'Porto',
      coord: {
        lat: 41.1496,
        lon: -8.611,
      },
      country: 'PT',
      population: 249633,
      timezone: 0,
      sunrise: 1670139805,
      sunset: 1670173569,
    },
  }
  const forecast = [
    {
      date: new Date('03/12/2022'),
      state: 'Sunny',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('04/12/2022'),
      state: 'Humidity',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('05/12/2022'),
      state: 'Cloudy',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('06/12/2022'),
      state: 'Sunny',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('07/12/2022'),
      state: 'Storm',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('08/12/2022'),
      state: 'Storm',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
    {
      date: new Date('09/12/2022'),
      state: 'Lightning',
      temperature: { min: 10, max: 18 },
      wind: '12 km/h',
      humidity: '60%',
      cloudy: '60%',
    },
  ]

  // const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY
  // console.log(
  //   'teste ENVVVVV',
  //   apiKey,
  //   import.meta.env.VITE_OPEN_WEATHER_MAP_KEY,
  // )

  return (
    <div className="App">
      <div className="container">
        <Header />

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
        {fetchedData.data && <Weekly forecasts={forecasts}></Weekly>}
      </div>

      <Menu></Menu>
    </div>
  )
}

export default App
