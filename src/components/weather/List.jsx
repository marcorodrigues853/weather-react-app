import ListItem from './ListItem'

function List({ forecasts }) {
  // console.log('LIST FORECAST', forecasts)

  const hours = forecasts[0].list

  // console.log('LISSTTT 232142432432', hours)
  const list = forecasts[0].list.map((forecast, index) => (
    <ListItem
      key={index}
      date={forecast.dt}
      state={forecast.weather[0].description}
      icon={forecast.weather[0].icon}
    ></ListItem>
  ))

  return <div className="card list-item">{list}</div>
}

export default List
