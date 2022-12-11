import debounce from './../base/debounce.js';

function Header(params) {
  function handleClick(e) {
    console.log('handleClick event', e);
    // setSelectedCity(e.target.value);

    if (e.key === 'Enter') params.setSelectedCity(e.target.value);
    console.log(e.target.value);
  }

  const geolocation = navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const position = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      console.log('position', position);
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
      <span className="city-title">{params.selectedCity}</span>
      <input type="text" className="input-search" onKeyUp={handleClick}></input>
      <ion-icon name="search-outline" style={{ fontSize: 20 }}></ion-icon>

      <ion-icon name="settings-outline" style={{ fontSize: 20 }}></ion-icon>
    </section>
  );
}
export default Header;
