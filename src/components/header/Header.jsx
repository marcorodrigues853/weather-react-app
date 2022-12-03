function Header() {
  return (
    <section className="header">
      <button className="button">
        <ion-icon name="menu-outline" style={{ fontSize: 30 }}></ion-icon>
      </button>

      <span className="city-title">Florida</span>
      <ion-icon name="settings-outline" style={{ fontSize: 20 }}></ion-icon>
    </section>
  )
}
export default Header
