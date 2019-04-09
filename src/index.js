// Libs
import React from "react";
import ReactDOM from "react-dom";
import "./styles/scss/App.scss";

// Components + data services
import WeeklyForecast from "./components/WeeklyForecast";
import CurrentForecast from "./components/CurrentForecast";
import DailyIndicators from "./components/DailyIndicators";
import { dataService } from "./services/dataServices";

// Vibrant for colors extraction from images
import Vibrant from 'node-vibrant';


class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      currentWeather: {},
      forecastData: [],
      updateStatus: "Update all forecast data",
      startTime: new Date(),
      isUpdated: false,
      currentCity: "Belgrade",
      prevCity: "Novi Sad", // prev city before switchting,
      rotate: 0,
      loaded: false
    };

    this.updateData = this.updateData.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  
  componentDidMount() {
    // Get current forecast data 
    dataService.currentForecastData(this.state.currentCity).then(weatherData => {
      this.setState({
        currentWeather: weatherData
      });
    });

    // Get weekly forecast data
    dataService.weekForecastData(this.state.currentCity).then(weekForecast => {
      this.setState({
        forecastData: weekForecast
      });
    });

    setTimeout(function() {
      document.querySelector('.application').classList.add('loaded');
    }, 1400);

    this.setState({
      loaded: true
    });
  }

 

  // Update data when user click "refresh" icon
  updateData() {
    dataService.currentForecastData(this.state.currentCity).then(currentForecast => {
      this.setState({
        currentWeather: currentForecast
      });
    });

    dataService.weekForecastData(this.state.currentCity).then(weekForecast => {
      this.setState({
        forecastData: weekForecast
      });
    });

    this.setState({
      isUpdated: true,
      startTime: new Date(),
      rotate: this.state.rotate+360
    }, function() {
      // rotate a refresh icon and animate status
      let refreshIcon = document.querySelector(".update-photo");
      let rStatus = document.querySelector(".status");
      refreshIcon.style.transform = 'rotate(' + this.state.rotate + 'deg)';

      // restart animation each time
      rStatus.classList.remove("refresh");
      void rStatus.offsetWidth;
      rStatus.classList.add("refresh");
    });
  }

  /**
 * Functionality for switching cities
 * It takes city name to switch to and prev active city
 */
  changeCity(city, prev) {
    // Change state for current and previous city
    this.setState({
      currentCity: city,
      prevCity: prev
    }, function() {
      // Get current weather data
      dataService.currentForecastData(this.state.currentCity).then(weatherData => {
        this.setState({
          currentWeather: weatherData
        });
      });

      // Get weekly weather data
      dataService.weekForecastData(this.state.currentCity).then(weekForecast => {
        this.setState({
          forecastData: weekForecast
        });
      });
    });

    // Change background image for another choosen city
    let weeklyDiv = document.querySelector(".weekly-forecast");
    weeklyDiv.classList.toggle("back-image"); 

    let currentForecast = document.querySelector(".current-forecast");
    currentForecast.style.backgroundImage = "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))";
  }

  componentDidUpdate() {
    let currentForecast = document.querySelector(".current-forecast");
    let dailyIndi = document.querySelector(".daily-indicators");
    let body = document.querySelector("body");
    let city;

    // Extract most common colors from images
    let bg = new Vibrant('https://uploads.codesandbox.io/uploads/user/7907dbc5-9a62-4c02-b43f-2f2b34d82638/Q7QA-bg.jpg');
    let ns = new Vibrant('https://uploads.codesandbox.io/uploads/user/7907dbc5-9a62-4c02-b43f-2f2b34d82638/TIRH-ns.jpg');
    let color1;
    let color2;
    let bodyColor;

    if(this.state.currentCity === "Belgrade") {
      city = bg;
    } else {
      city = ns;
    }

    // Change gradient colors for boxes and body
    city.getPalette((err, palette) => {
      // Save current forecast colors
      color1 = palette.Muted.getHex();
      color2 = palette.LightVibrant.getHex();
      bodyColor = palette.DarkMuted.getHex();

      currentForecast.style.backgroundImage = `-webkit-gradient(linear, right top, left bottom, from(${color2}), to(${color1}))`;
      dailyIndi.style.backgroundImage = `-webkit-gradient(linear, right top, left bottom, from(${color2}), to(${color1}))`;
      body.style.backgroundImage = `-webkit-gradient(linear, right top, left bottom, from(${bodyColor}), to(${color1}))`;
    });
  }

  render() {
    return (
        <div className="application">
          <h5>Weathery</h5>
          <div className="main">
            <div className="col">
              <div className="item current-forecast">
                <CurrentForecast 
                  weatherData={this.state.currentWeather}
                  updateData={this.updateData}
                  updateTime={this.state.updateTime}
                  updateStatus={this.state.updateStatus}
                  startTime={this.state.startTime}
                  isUpdated={this.state.isUpdated} />
              </div>
              <div className="item daily-indicators">
                <DailyIndicators weatherData={this.state.currentWeather} />
              </div>
            </div>

            <div className="item weekly-forecast">
              <WeeklyForecast 
                  weatherData={this.state.currentWeather}
                  forecastData={this.state.forecastData}
                  changeCity={this.changeCity}
                  prevCity={this.state.prevCity}
                  currentCity={this.state.currentCity}
                  changeImage={this.changeImage} />
            </div>
          </div>
        </div>      
    );
  }
}

ReactDOM.render(<App />, document.querySelector("body"));
