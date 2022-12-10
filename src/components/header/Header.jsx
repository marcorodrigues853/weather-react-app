import { useState } from 'react';
function Header() {
  const [selectedCity, setSelectedCity] = useState('Porto');

  function handleClick(e) {
    setSelectedCity(e.target.value);
  }

  const geolocation = navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const position = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      // console.log('position', position);
      return position;
    },
    () => {
      alert("couldn't get current position");
    },
  );
  console.log('selectedCity', selectedCity, geolocation);
  return (
    <section className="header">
      <button className="button">
        <ion-icon name="menu-outline" style={{ fontSize: 30 }}></ion-icon>
      </button>
      <span className="city-title">{selectedCity}</span>
      <input onChange={handleClick}></input>

      <ion-icon name="settings-outline" style={{ fontSize: 20 }}></ion-icon>
    </section>
  );
}
export default Header;
