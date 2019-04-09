class Forecast {
  constructor(forecast, type) {
    if(type === "current") {
      this.town = forecast.location.name;
      this.dailyTemp = forecast.current.temp_c;
      this.descriptionTemp = forecast.current.condition.text;
      this.currentDate = forecast.location.localtime.slice(0, 10);
      this.currentHumidity = forecast.current.humidity;
      this.currentVisability = forecast.current.vis_km;
      this.currentDewPt = forecast.current.pressure_in;
      this.currentWindKph = forecast.current.wind_kph;
      this.weatherCode = forecast.current.condition.code;
      this.isDay = forecast.current.is_day;
    } else {
      this.maxTemp = forecast;
    }
  }
}

export default Forecast;
