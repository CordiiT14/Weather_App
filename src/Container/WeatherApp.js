import React, {useState, useEffect} from 'react';
import SearchBar from '../Components/SearchBar'
import DisplayWeather from '../Components/DisplayWeather'
import './WeatherApp.css';

const WeatherApp = () => {
    const [city, setCity] = useState("Edinburgh")
    const [weatherData, setWeatherData] = useState("")

    const getWeather = () => {
        fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(data => data.json())
        .then(results => setWeatherData(results))
    }

    useEffect(() => {
        getWeather();
    },[city]);

    return(
        <div className="main-container">
            <h1>Weather App</h1>
            <SearchBar setCity={setCity}/>
            { weatherData ? <DisplayWeather city={city} weatherData={weatherData}/> : null}
        </div>
    )
}

export default WeatherApp;