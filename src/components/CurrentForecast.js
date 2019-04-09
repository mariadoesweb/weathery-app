import React from "react";
import { 
  SUNNY_AND_MOON_DAY, 
  CLOUD_ARRAY, 
  CLOUDY_ARRAY, 
  SNOW_ARRAY, 
  RAIN_ARRAY, 
  STORM_ARRAY,
  FILES_PATH } from "../common/declare";

// Handy stuff
import TimeAgo from "react-timeago";
import updatedText from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import Chart from "./Chart";

// Build text for refresh status
const formatter = buildFormatter(updatedText);


const CurrentForecast = props => {
  
  // Use appropriate icon based on weather code received from API
  const findWeatherImage = () => {
    let imagePath;
    let weatherCode = props.weatherData.weatherCode;
    
    if (weatherCode === SUNNY_AND_MOON_DAY && props.weatherData.isDay === 1) {
      imagePath = `${FILES_PATH}/0cip-sun.svg`;
    } else if (weatherCode === SUNNY_AND_MOON_DAY && props.weatherData.isDay === 0) {
      imagePath = `${FILES_PATH}/lFvW-moon.svg`;
    } else if (CLOUD_ARRAY.indexOf(weatherCode) !== -1) {
      imagePath = `${FILES_PATH}/xb6a-cloud.svg`;
    } else if (CLOUDY_ARRAY.indexOf(weatherCode) !== -1) {
      imagePath = `${FILES_PATH}/sq-o-cloudy.svg`;
    } else if (SNOW_ARRAY.indexOf(weatherCode) !== -1) {
      imagePath = `${FILES_PATH}/aODy-snowing.svg`;
    } else if (RAIN_ARRAY.indexOf(weatherCode) !== -1) {
      imagePath = `${FILES_PATH}/4aoT-rain.svg`;
    } else if (STORM_ARRAY.indexOf(weatherCode) !== -1) {
      imagePath = `${FILES_PATH}/zWvz-storn.svg`;
    }
    return imagePath;
  }

  
  return (
    <React.Fragment>
      <div className=" current-item currentTemp"> 
        <h3>{Math.ceil(props.weatherData.dailyTemp)}&deg;</h3>
        <span>{props.weatherData.descriptionTemp}</span>
      </div>

      <div className="current-item weather_image">
        <img src={findWeatherImage()} alt={props.weatherData.descriptionTemp} />
      </div>

      <div className="current-item updated">
        <Chart />
        <div className='update-item photo'>
            <img
            src="//uploads.codesandbox.io/uploads/user/7907dbc5-9a62-4c02-b43f-2f2b34d82638/AXnT-refresh.svg"
            alt="Update weather data now" 
            className='update-photo' 
            onClick={props.updateData}
          />
        </div>
        <div className="status">{props.isUpdated ? <TimeAgo date={props.startTime} formatter={formatter} /> : <span>{props.updateStatus}</span>}</div>
      </div>
    </React.Fragment>
  );
}


export default CurrentForecast;