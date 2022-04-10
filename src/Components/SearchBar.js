import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar = ({setCity}) => {

    const [search, setSearch] = useState('')

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (search == ""){
            return
        } else {
        let city = search.trim()
        city = city[0].toUpperCase() + search.substring(1);

        setCity(city)

        setSearch("");
        }
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