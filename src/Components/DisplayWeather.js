import React from 'react';

const DisplayWeather = ({city, weatherData}) => {


    return(
        <div>
            <h2>{city}</h2>
            <p>Temperature: {weatherData.temperature}</p>
        </div>
    )
}

export default DisplayWeather;