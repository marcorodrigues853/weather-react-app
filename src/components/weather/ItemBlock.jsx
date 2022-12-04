import cloudy from './../../assets/icons-png/cloudy.png'
import wind from './../../assets/icons-png/wind.png'
import humidity from './../../assets/icons-png/humidity.png'

function ItemBlock({ icon, state, unit }) {
  return (
    <div className="item-block">
      {icon && (
        <ion-icon
          name={icon}
          style={{ fontSize: 28, color: '#A3B7D7' }}
        ></ion-icon>
      )}
      <div className="item__box">
        <div className="item-type">{state}</div>
        <div className="item-detail">{unit}</div>
      </div>
    </div>
  )
}
export default ItemBlock
