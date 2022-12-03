import './App.css'
import Card from './components/base/Card'
import Header from './components/header/Header'
import Detailed from './components/weather/Detailed'
import Now from './components/weather/Now'
import List from './components/weather/List'

function App() {
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

  return (
    <div className="App">
      <Header />
      <Now forecast={forecast[0]} />
      <Detailed />
      <List forecast={forecast} />
    </div>
  )
}

export default App
