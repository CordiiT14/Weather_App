import React from 'react';

const WeatherIcon = ({weatherType}) => {

    const url = () => {
        if (weatherType.lowerCase() == "partly cloudy"){
            return ("../src/Icons/001-sunny.png")
        }
    }

    return (
        <img src={url} alt={weatherType}></img>
    )
}

export default WeatherIcon;