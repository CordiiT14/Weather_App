import React, {useState} from 'react';


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
                <input 
                type="text" 
                placeholder="City"
                value={search}
                onChange={handleCityChange}
                />
                <input 
                type="submit"
                value="post"
                />
            </form>
        </div>
    )
}

export default SearchBar;