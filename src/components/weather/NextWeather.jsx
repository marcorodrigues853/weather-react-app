import List from './List'
function NextWeather({ forecasts }) {
  console.log('NEXT WEATHER', forecasts)
  return (
    <div className="next-hours-box">
      <span className="next-hours">Next hours:</span>
      <List forecast={forecasts}></List>
      {/* <ListItem></ListItem> */}
    </div>
  )
}
export default NextWeather
