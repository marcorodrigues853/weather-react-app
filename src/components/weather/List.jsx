import ListItem from './ListItem'

function List({ forecast }) {
  const list = forecast.map((forecast, index) => (
    <ListItem
      key={index}
      date={forecast.date}
      state={forecast.state}
    ></ListItem>
  ))
  return <div className="card list-item">{list}</div>
}

export default List
