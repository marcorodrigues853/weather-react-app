import { useState } from 'react';
import debounce from './../base/debounce.js';

function Header(params) {
  const [isShown, setIsShown] = useState(false);

  function handleClick(e) {
    // console.log('handleClick event', e);
    // setSelectedCity(e.target.value);
    if (e.key === 'Enter') {
      params.setSelectedCity(e.target.value);
      setIsShown(!isShown);
    }

    // console.log(e.target.value);
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

  // console.log('selectedCity', geolocation);
  return (
    <section className="header">
      <button className="button">
        <ion-icon name="menu-outline" style={{ fontSize: 30 }}></ion-icon>
      </button>
      {!isShown && (
        <span className="city-title" onClick={() => setIsShown(!isShown)}>
          {params.selectedCity}
        </span>
      )}

      {isShown && (
        <div type="text" className="form-search">
          <input
            type="text"
            className="input-search"
            onKeyUp={handleClick}
            required={true}
            minLength={2}
          ></input>
          <ion-icon name="search-outline" style={{ fontSize: 20 }}></ion-icon>
        </div>
      )}
      <ion-icon name="settings-outline" style={{ fontSize: 20 }}></ion-icon>
    </section>
  );
}
export default Header;
