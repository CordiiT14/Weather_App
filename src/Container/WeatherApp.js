import React, {useState, useEffect} from 'react';
import SearchBar from '../Components/SearchBar'
import DisplayWeather from '../Components/DisplayWeather'

const WeatherApp = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState("")

    const getWeather = () => {
        fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(data => data.json())
        .then(results => setWeatherData(results))
    }

    useEffect(() => {
        getWeather();
    })

    return(
        <div>
            <h1>Weather App</h1>
            <SearchBar setCity={setCity}/>
            <DisplayWeather city={city} weatherData={weatherData}/>
        </div>
    )
}

export default WeatherApp;