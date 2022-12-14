import icon from './../../assets/Icon-weather.png';
function Now({ forecast, selectedCity }) {
  const weather = forecast.weather[0];
  const info = forecast.main;
  const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="card now">
      <img src={icon} alt="" />
      <div className="info">
        <div className="now__day">{selectedCity} Today</div>
        <div className="now__unit">
          {info.temp_min.toFixed()}/{info.temp_max.toFixed()} º
        </div>
        <div className="now__state">{weather.description}</div>
      </div>
    </div>
  );
}

export default Now;
