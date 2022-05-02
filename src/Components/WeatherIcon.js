import React from 'react';


const WeatherIcon = ({weatherType}) => {


    const weather = weatherType.toLowerCase()

    if (weather == "partly cloudy"){
        return (
            <img src={`${process.env.PUBLIC_URL}../../assests/images/003-cloudy.png`} alt={weatherType} width="80px"></img>
        )
    } else if (weather == "sunny" || weather== "clear"){
        return (
            <img src={`${process.env.PUBLIC_URL}../../assests/images/001-sunny.png`}alt={weatherType} width="80px"></img>
            )
    } else if (weather.includes("rain")){
        return (
            <img src={`${process.env.PUBLIC_URL}../../assests/images/002-rainy.png`} alt={weatherType} width="80px"></img>
            )
    } else if (weather.includes("wind")) {
        return (
            <img src={`${process.env.PUBLIC_URL}../../assests/images/004-windy.png`} alt={weatherType} width="80px"></img>
            )
    } 
}


export default WeatherIcon;