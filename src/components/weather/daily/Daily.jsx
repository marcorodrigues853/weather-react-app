import icon from './../../../assets/Icon-weather.png'
import List from './../List'
import ItemBlock from './../ItemBlock'

function Daily({ forecast: currentWeather }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  console.log('69999', currentWeather)

  const weather = {
    date: new Date(currentWeather.dt).toLocaleDateString('us-US', options),
    icon: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
    wind: currentWeather.wind.speed,
    humidity: currentWeather.main.humidity,
    temperature: currentWeather.main.temp,
    state: currentWeather.weather[0].description,
    visibility: currentWeather.visibility,
  }

  // const date = new Date(currentWeather.dt).toLocaleDateString('us-US', options)
  // const icon = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`

  return (
    <div className="today-container">
      <div className="date">{weather.date}</div>
      <img src={weather.icon} className="state-preview"></img>
      <div className="card display-info">
        <ItemBlock
          state="Temperature"
          unit={weather.temperature + 'º'}
        ></ItemBlock>
        <ItemBlock state="Humidity" unit={weather.humidity + '%'}></ItemBlock>
        <ItemBlock
          state="Visibility"
          unit={weather.visibility / 1000 + ' km'}
        ></ItemBlock>
      </div>

      <div className="next-hours-box">
        <span className="next-hours">Next hours:</span>
        {/* <List forecast={forecast}></List> */}
        {/* <ListItem></ListItem> */}
      </div>
    </div>
  )
}
export default Daily
