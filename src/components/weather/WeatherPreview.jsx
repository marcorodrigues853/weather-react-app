import icon from './../../assets/Icon-weather.png';
import List from './List';
import ItemBlock from './ItemBlock';

function WeatherPreview({ forecasts }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date = new Date().toLocaleDateString('us-US', options);

  return (
    <div className="today-container">
      <div className="date">{date}</div>
      <img
        src="http://openweathermap.org/img/wn/02d@2x.png"
        className="state-preview"
      ></img>
      <div className="card display-info">
        <ItemBlock state="Temperature" unit="54 %"></ItemBlock>
        <ItemBlock state="Humidity" unit="54 %"></ItemBlock>
        <ItemBlock state="Air Quality" unit="54 %"></ItemBlock>
      </div>

      {/* //!NEED TO BE OTHER COMPONENT */}
      <div className="next-hours-box">
        <span className="next-hours">Next hours:</span>
        <List forecasts={forecasts}></List>
        {/* <ListItem></ListItem> */}
      </div>
    </div>
  );
}
export default WeatherPreview;
