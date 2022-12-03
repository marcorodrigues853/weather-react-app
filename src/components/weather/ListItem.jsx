function ListItem({ date, state = 'Sunny' }) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const dayNumber = new Date(date).getDay()

  return (
    <div className="item__next">
      <div className="week-day">{weekday[dayNumber]}</div>
      <div className="item__next--state">
        <ion-icon name="sunny-outline"></ion-icon>
        <div className="state">{state}</div>
      </div>
      <div className="unit">11/13º</div>
    </div>
  )
}

export default ListItem
