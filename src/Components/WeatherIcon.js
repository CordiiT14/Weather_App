import React from 'react';
import cloudy from "../images/003-cloudy.png";
import sunny from "../images/001-sun.png";
import rain from "../images/002-rainy.png";
import wind from "../images/004-windy.png";


const WeatherIcon = ({weatherType}) => {

    const img = () => {

        const weather = weatherType.toLowerCase()

        if (weather == "partly cloudy"){
            return (
            <img src={cloudy} alt={weatherType} width="80px"></img>
            )
        } else if (weather == "sunny" || weather== "clear"){
            return (
                <img src={sunny} alt={weatherType} width="80px"></img>
                )
        } else if (weather.includes("rain")){
            return (
                <img src={rain} alt={weatherType} width="80px"></img>
                )
        } else if (weather.includes("wind")) {
            return (
                <img src={wind} alt={weatherType} width="80px"></img>
                )
        } 
    }

    return (
        <>
        {img}
        </>
        
    )
}

export default WeatherIcon;