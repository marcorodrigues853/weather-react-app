import List from './List'
function NextWeather({ forecast }) {
  console.log('NEXT WEATHER', forecast)
  return (
    <div className="next-hours-box">
      <span className="next-hours">Next hours:</span>
      <List forecast={forecast}></List>
      {/* <ListItem></ListItem> */}
    </div>
  )
}
export default NextWeather
