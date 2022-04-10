import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar = ({setCity}) => {

    const [search, setSearch] = useState('')

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const city = search.trim().toLowerCase()

        setCity(city)
    }

    const handleCityChange = (event) => {
        setSearch(event.target.value)
    }


    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
                <label>
                    Search Weather by City:
                </label>
                <input 
                type="text" 
                placeholder="City"
                value={search}
                onChange={handleCityChange}
                />
                <input 
                className='submit'
                type="submit"
                value="search">
                </input>
            </form>
        </div>
    )
}

export default SearchBar;