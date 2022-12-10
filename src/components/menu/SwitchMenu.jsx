function SwitchMenu() {
  return (
    <div className="menu-container">
      <button className="btn-switch-menu" active>
        Hourly
      </button>
      <button className="btn-switch-menu">Daily</button>
    </div>
  );
}
export default SwitchMenu;
