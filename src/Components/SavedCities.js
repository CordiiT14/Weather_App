import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './SavedCities.css';

const SavedCities = ({savedCities, setCity}) => {

    const handleClick = (event) => {
        const city = event.target.value
        console.log(event)
        // setCity(city)
    }

    const savedNodes = savedCities.map( (city, index) => {
        return <li onClick={handleClick} key={index} value={city}>{city}</li>
    })



    return(
        <div className='saved'>
        <ul>
            {savedNodes}
        </ul>
        </div>
    )
}
export default SavedCities;