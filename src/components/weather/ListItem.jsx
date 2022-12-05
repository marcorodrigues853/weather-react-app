function ListItem({
  date,
  state = 'Sunny',
  icon: iconCode = '02d',
  temperature,
}) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const weekDayIndex = new Date(date).getDay() ?? 0;
  const icon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="item__next">
      <div className="week-day">{weekday[weekDayIndex]}</div>
      <div className="item__next--state">
        <img src={icon} alt="" className="icon-weather--small" />
        <div className="state">{state}</div>
      </div>
      <div className="unit">{temperature.toFixed()}º</div>
    </div>
  );
}

export default ListItem;
