import List from './../List'
import ItemBlock from './../ItemBlock'

function Daily({ currentWeather, forecasts }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const weather = {
    date: new Date(currentWeather.dt).toLocaleDateString('us-US', options),
    icon: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
    info: {
      wind: currentWeather.wind.speed,
      humidity: currentWeather.main.humidity,
      temperature: currentWeather.main.temp,
      state: currentWeather.weather[0].description,
      visibility: currentWeather.visibility,
    },
  }

  return (
    <div className="today-container">
      <div className="date">{weather.date}</div>
      <img src={weather.icon} className="state-preview"></img>
      <div className="card display-info">
        <ItemBlock
          state="Temperature"
          unit={weather.info.temperature + 'º'}
        ></ItemBlock>
        <ItemBlock
          state="Humidity"
          unit={weather.info.humidity + '%'}
        ></ItemBlock>
        <ItemBlock
          state="Visibility"
          unit={weather.info.visibility / 1000 + ' km'}
        ></ItemBlock>
      </div>

      <div className="next-hours-box">
        <span className="next-hours">Next hours:</span>
        <List forecasts={forecasts}></List>
      </div>
    </div>
  )
}
export default Daily
