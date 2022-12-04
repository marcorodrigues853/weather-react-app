class OpenWeatherApi {
  #key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY
  #city

  constructor(city) {
    this.setCity(city)
  }

  #setCity(city) {
    this.city = city
  }

  getHourlyFormDay(day) {
    return [...day]
  }

  getNextDays(days) {
    return [...days]
  }
}
export default OpenWeatherApi
