import React from 'react';
import './DisplayWeather.css';
import WeatherIcon from './WeatherIcon';

const DisplayWeather = ({city, weatherData}) => {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const currentDate = new Date();
    const today = currentDate.getDay();

    const cityName = city[0].toUpperCase() + city.substring(1);
    

    return(
        <div className="city-weather">
            <h2>{cityName}</h2>
            <div className="current-weather">
                <h3>{weekdays[today]}</h3>
                <p>{weatherData.temperature} {weatherData.description} </p>
                <WeatherIcon weatherType={weatherData.description}/>
            </div>
            <div className="forecast-container">
                <h3>Forcast</h3>
                <section className="city-forecast">
                    <div className="forecast">
                        <h4>{weekdays[today+1]}</h4>
                        <p>{weatherData.forecast[0].temperature}</p>
                    </div>
                    <div className="forecast">
                        <h4>{weekdays[today+2]}</h4>
                        <p>{weatherData.forecast[1].temperature}</p>
                    </div>
                    <div className="forecast">
                        <h4>{weekdays[today+3]}</h4>
                        <p>{weatherData.forecast[2].temperature}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DisplayWeather;