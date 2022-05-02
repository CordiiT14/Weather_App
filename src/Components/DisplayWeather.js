import React from 'react';
import './DisplayWeather.css';
import WeatherIcon from './WeatherIcon';

const DisplayWeather = ({city, weatherData, updateSavedCities, savedCity}) => {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const currentDate = new Date();
    const today = currentDate.getDay();

    
    const handleClick = () => {
        updateSavedCities();
    };

    return(
        <div className="city-weather">
            
            <div className="current-weather">
            <h2>{city}</h2>
            {  !savedCity() ?
                <img 
                className="save-city" 
                onClick={handleClick} 
                src="" 
                width="30px">
                </img>  :
                <img
                className="remove-saved-city"
                onClick={handleClick}
                src=""
                width="30px"
                >
                </img>
            }   
                <h3>{weekdays[today]}</h3>
                <WeatherIcon weatherType={weatherData.description}/>
                <p>{weatherData.temperature}</p> 
                <p className="description">{weatherData.description} </p>
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