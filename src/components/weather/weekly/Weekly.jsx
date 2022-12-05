import WeatherPreview from '../WeatherPreview';
import NextWeather from './../NextWeather';
function Weekly({ forecasts }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date = new Date().toLocaleDateString('us-US', options);
  return (
    <div className="teste">
      {date}
      <div className="week-list">
        <div className="week-box card">
          <div className="day">18 koiso July</div>
          <div className="box">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              className="icon-weather"
            />
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
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt=""
              className="icon-weather"
            />
            <div className="temperature">29º</div>
          </div>
          <div className="box">
            <div className="humidity-info">Humidity</div>
            <div className="percentage-info">78%</div>
          </div>
        </div>
      </div>
      <WeatherPreview forecasts={forecasts} />

      <NextWeather forecasts={forecasts} />

      <span> ACABOU O DAILLLLYYYYYYYY</span>
    </div>
  );
}
export default Weekly;
