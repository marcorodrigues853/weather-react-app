class OpenWeatherApi {
  #key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY
  #url = 'https://api.openweathermap.org/data/2.5/weather'

  #city
  #units

  constructor(city, unit) {
    this.#setCity(city)
    this.#setUnit(unit)
  }

  #setUnit(unit = 'metric') {
    switch (unit) {
      case unit === 'metric':
        return `?units=${unit}`
        break
      case unit === 'imperial':
        return `?units=${unit}`
        break

      default:
        throw new Error('Unsupported unit')
        break
    }
  }
  #setCity(city) {
    if (!city) throw new Error('No city specified')
    this.city = city
  }

  buildUrl() {
    return `${this.#url}?q=${this.#city}${this.#units}&appid=${this.#key}`
  }

  getHourlyFormDay(day) {
    return [...day]
  }

  getNextDays(days) {
    return [...days]
  }
}
export default OpenWeatherApi
