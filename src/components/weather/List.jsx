import ListItem from './ListItem'

function List({ forecasts }) {
  console.log('FORECASTS 69', forecasts)
  const list = forecasts.list.map((forecast, index) => (
    <ListItem
      key={index}
      date={forecast.dt}
      state={forecast.weather[0].description}
      icon={forecast.weather[0].icon}
      temperature={forecast.main.temp}
    ></ListItem>
  ))

  return <div className="card list-item">{list}</div>
}

export default List
