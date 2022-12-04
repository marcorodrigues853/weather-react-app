import Detailed from './Detailed'
import Now from './Now'
import List from './List'
function Today({ currentWeather, forecasts }) {
  return (
    <div className="today">
      <Now forecast={currentWeather} />
      <Detailed />
      <List forecasts={forecasts} />
    </div>
  )
}
export default Today
