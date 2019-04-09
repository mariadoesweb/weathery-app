import React from "react";

/**
 * Display some useful detailed info for current weather
 */
const DailyIndicators = props => {

  return (
    <React.Fragment>
      <div className="other-forecast-indicators">
        <div className="indicator humidity">
          <span>{props.weatherData.currentHumidity}%</span>
          <span className='name-of-indicator'>Humidity</span>
        </div>

        <div className="indicator dewPt">
          <span>{props.weatherData.currentDewPt}</span>
          <span className='name-of-indicator'>Dew Pt.</span>
        </div>

        <div className="indicator windKph">
          <span>{props.weatherData.currentWindKph}</span>
          <span className='name-of-indicator'>Wind kph</span>
        </div>

        <div className="indicator visability">
          <span>{props.weatherData.currentVisability} km</span>
          <span className='name-of-indicator'>Visibility</span>
        </div>
      </div>
    </React.Fragment>
  );

};

export default DailyIndicators;