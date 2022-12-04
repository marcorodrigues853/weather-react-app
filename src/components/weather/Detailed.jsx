import ItemBlock from './ItemBlock'

function Detailed() {
  return (
    <div className="card d-flex-center-around">
      <ItemBlock icon="cloud-outline" state="Wind" unit="12 km/h"></ItemBlock>
      <ItemBlock
        icon="rainy-outline"
        state="Humidity"
        unit="14 km/h"
      ></ItemBlock>
      <ItemBlock
        icon="cloudy-outline"
        state="Cloudy"
        unit="16 km/h"
      ></ItemBlock>
    </div>
  )
}

export default Detailed
