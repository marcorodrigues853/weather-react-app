import icon from './../../assets/Icon-weather.png'
function Now({ forecast }) {
  console.log(forecast)
  return (
    <div className="card now">
      {/* <svg className="teste">
          <use xlinkHref={icon}></use>
        </svg> */}

      {/* <img src={icon} alt="" /> */}
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />

      <div className="info">
        <div className="now__day">{forecast.state}</div>
        <div className="now__unit">
          {forecast.temperature.min}/{forecast.temperature.max} º
        </div>
        <div className="now__state">{forecast.state}</div>
      </div>
    </div>
  )
}

export default Now
