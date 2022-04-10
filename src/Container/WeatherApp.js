import React, {useState, useEffect} from 'react';
import SearchBar from '../Components/SearchBar'
import DisplayWeather from '../Components/DisplayWeather'
import SavedCities from '../Components/SavedCities';
import './WeatherApp.css';

const WeatherApp = () => {
    const [city, setCity] = useState("Edinburgh")
    const [weatherData, setWeatherData] = useState("")
    const [savedCities, setSavedCities] = useState(["Hannover"])


    const getWeather = () => {
        fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(data => data.json())
        .then(results => setWeatherData(results))
    }

    useEffect(() => {
        getWeather();
    },[city]);


    const updateSavedCities = () => {
        const updateSaved = savedCities;
        updateSaved.push(city);
        setSavedCities([...updateSaved])
    }

    return(
        <div className="main-container">
            <h1>Weather App</h1>
            <SearchBar setCity={setCity}/>
            <SavedCities savedCities={savedCities} setCity={setCity}/>
            { weatherData ? <DisplayWeather city={city} weatherData={weatherData} updateSavedCities={updateSavedCities}/> : null}
        </div>
    )
}

export default WeatherApp;