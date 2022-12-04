import ItemBlock from './ItemBlock'

function Detailed(currentWeather) {
  return (
    <div className="card d-flex-center-around">
      <ItemBlock
        icon="cloud-outline"
        state="Wind"
        unit={currentWeather.forecast.wind.speed + ' km/h'}
      ></ItemBlock>
      <ItemBlock
        icon="rainy-outline"
        state="Humidity"
        unit={currentWeather.forecast.main.humidity + '%'}
      ></ItemBlock>
      <ItemBlock
        icon="cloudy-outline"
        state="Visibility"
        unit={currentWeather.forecast.visibility / 1000 + 'km'}
      ></ItemBlock>
    </div>
  )
}

export default Detailed
