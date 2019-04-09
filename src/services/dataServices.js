import Forecast from "../entites/Forecast";

class WeatherRequest {

  // Get current forecast data 
  currentForecastData(city) {
    return fetch (
      `https://api.apixu.com/v1/current.json?key=9ee5b68263674414bd495725180509&q=${city}`
    )
      .then(response => response.json())
      .then(forecast => {
        return new Forecast(forecast, "current");
      });
  }

  // Get weekly forecast data
  weekForecastData(city) {
    return fetch (
      `https://api.apixu.com/v1/forecast.json?key=9ee5b68263674414bd495725180509&q=${city}&days=7`
    )
      .then(response => response.json())
      .then(forecastObj => {
        let days = forecastObj.forecast.forecastday;
        days.map(oneweekforecast => {
          return new Forecast(oneweekforecast, "week");
        });
        return days;
      });
  }
}

export const dataService = new WeatherRequest();