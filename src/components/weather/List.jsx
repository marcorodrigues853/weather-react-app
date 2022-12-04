import ListItem from './ListItem'

function List({ forecasts }) {
  // console.log('LIST FORECAST', forecasts)

  const hours = forecasts[0].list

  // console.log('LISSTTT 232142432432', hours)
  const list = forecasts[0].list.map((forecast, index) => (
    <ListItem
      key={index}
      date={new Date(forecast.dt).getDate()}
      state={forecast.weather[0].description}
    ></ListItem>
  ))

  return <div className="card list-item">{list}</div>
}

export default List
