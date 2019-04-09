import React from "react";
import { 
  SUNNY_DAY, 
  CLOUD_ARRAY, 
  CLOUDY_ARRAY, 
  SNOW_ARRAY, 
  RAIN_ARRAY, 
  STORM_ARRAY,
  FILES_PATH } from "../common/declare";
import $ from "jquery";

/**
 * Component for displaying weekly data for current selected city
 */
const WeeklyForecast = props => {

  // Convert date received from API for prettier print
  // "2018-09-05" to -> 5 September
  const convertCurrentDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date();

    return (
      `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}`
    );
  }
      

  // Find appropriate weather icon for every day in a week
  const findWeatherWeekImage = (weatherObj) => {
    let weatherCode = weatherObj.day.condition.code;
    let weekImagePath;

    if (weatherCode === SUNNY_DAY) {
      weekImagePath = `${FILES_PATH}/0cip-sun.svg`;
    } else if (CLOUD_ARRAY.indexOf(weatherCode) !== -1) {
      weekImagePath = `${FILES_PATH}/xb6a-cloud.svg`;
    } else if (CLOUDY_ARRAY.indexOf(weatherCode) !== -1) {
      weekImagePath = `${FILES_PATH}/sq-o-cloudy.svg`;
    } else if (SNOW_ARRAY.indexOf(weatherCode) !== -1) {
      weekImagePath = `${FILES_PATH}/aODy-snowing.svg`;
    } else if (RAIN_ARRAY.indexOf(weatherCode) !== -1) {
      weekImagePath = `${FILES_PATH}/4aoT-rain.svg`;
    } else if (STORM_ARRAY.indexOf(weatherCode) !== -1) {
      weekImagePath = `${FILES_PATH}/zWvz-storn.svg`;
    }
    
    return weekImagePath;
  }

  // Print weather data for each day in a week
  const printWeekForecast = () => {
    let allWeekForecast = props.forecastData.map((oneDay, index) => {
      let currentDay = new Date(oneDay.date);

      return (
        <div className="week-forecast-item" key={index}>
          <div className='week-forecast-image'>
            <img src={findWeatherWeekImage(oneDay)} alt={Math.round(oneDay.day.maxtemp_c)} />
          </div>
          <span>{Math.round(oneDay.day.maxtemp_c)}&deg;</span>
          <span className='day-in-week'>{currentDay.toString().split(" ")[0].toUpperCase()}</span>
        </div>
      );
    });

    return allWeekForecast;
  }

  // When user click on city name show other city nicely (BG or NS)
  // Using a bit of jQuery here since it's easier for manipulation :)
  const openCityMenu = () => {
    // calculate height for dropdown
    // number of items in a list * height of h1 + padding of 24px
    let citiesH = $(".city-list h1").length * $(".title h1").height() + 24;

    // toggle class "open" to cities dropdown and current date
    $(".city-list, .current-date, .fa-angle-down, .one-week-forecast, .weekly-forecast").toggleClass("open");

    // animate height for cities to have a nicer effect
    $(".city-list").animate({
      height: $(".city-list").hasClass("open") ? citiesH : 0
    }, 0.0000000014);
  }

  return (
    <React.Fragment>
      <div className="cities">
        <div className="title">
          <h1 className="city" onClick={openCityMenu}>
           {props.weatherData.town}
            <i className="fa fa-angle-down" />
          </h1>
          
        </div>
        <div className="city-list" onClick={openCityMenu}>
           <h1 
            className="city another" 
            onClick={() => {props.changeCity(props.prevCity, props.currentCity);}}
          >
            {props.prevCity}
           </h1>
        </div>
      </div>

      <span className="current-date">{convertCurrentDate()}</span>
      <div className="one-week-forecast">{printWeekForecast()}</div>
    </React.Fragment>
  );
}

export default WeeklyForecast;


