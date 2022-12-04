import WeatherPreview from '../WeatherPreview'
import NextWeather from './../NextWeather'
function Weekly({ forecast }) {
  console.log('WEATHER PREVIEW', forecast)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date().toLocaleDateString('us-US', options)
  return (
    <div className="teste">
      {date}
      <div className="week-list">
        <div className="week-box card">
          <div className="day">18 koiso July</div>
          <div className="box">
            <div className="icon">ICON</div>
            <div className="temperature">29º</div>
          </div>
          <div className="box">
            <div className="humidity-info">Humidity</div>
            <div className="percentage-info">78%</div>
          </div>
        </div>
        <div className="week-box card">
          <div className="day">18 koiso July</div>
          <div className="box">
            <div className="icon">ICON</div>
            <div className="temperature">29º</div>
          </div>
          <div className="box">
            <div className="humidity-info">Humidity</div>
            <div className="percentage-info">78%</div>
          </div>
        </div>
        <div className="week-box card">
          <div className="day">18 koiso July</div>
          <div className="box">
            <div className="icon">ICON</div>
            <div className="temperature">29º</div>
          </div>
          <div className="box">
            <div className="humidity-info">Humidity</div>
            <div className="percentage-info">78%</div>
          </div>
        </div>
        <div className="week-box card">
          <div className="day">18 koiso July</div>
          <div className="box">
            <div className="icon">ICON</div>
            <div className="temperature">29º</div>
          </div>
          <div className="box">
            <div className="humidity-info">Humidity</div>
            <div className="percentage-info">78%</div>
          </div>
        </div>
      </div>
      <WeatherPreview forecast={forecast} />

      <NextWeather forecast={forecast} />

      <span> ACABOU O DAILLLLYYYYYYYY</span>
    </div>
  )
}
export default Weekly
