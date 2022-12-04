import cloudy from './../../assets/icons-png/cloudy.png'
import wind from './../../assets/icons-png/wind.png'
import humidity from './../../assets/icons-png/humidity.png'

function ItemBlock({ icon, state, unit }) {
  return (
    <div className="item-block">
      {icon && <img src={icon} alt="" />}
      <div className="item__box">
        <div className="item-type">{state}</div>
        <div className="item-detail">{unit}</div>
      </div>
    </div>
  )
}
export default ItemBlock
