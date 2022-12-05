import List from './List';
function NextWeather({ forecasts }) {
  return (
    <div className="next-hours-box">
      <span className="next-hours">Next hours:</span>
      <List forecasts={forecasts}></List>
    </div>
  );
}
export default NextWeather;
