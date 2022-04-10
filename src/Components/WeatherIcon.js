import React from 'react';

const WeatherIcon = ({weatherType}) => {

    const url = () => {

        const weather = weatherType.toLowerCase()

        if (weather == "partly cloudy"){
            return ("https://cdn-icons.flaticon.com/png/512/2900/premium/2900934.png?token=exp=1649595201~hmac=f3c6ceda1f55fb5c1609ff7e19a8bfb2")
        } else if (weather == "sunny" || weather== "clear"){
            return ("https://cdn-icons.flaticon.com/png/512/2900/premium/2900930.png?token=exp=1649595386~hmac=430b89b40bbfbdab84cf0627e5ce57ea")
        } else if (weather.includes("rain")){
            return ("https://cdn-icons.flaticon.com/png/512/2900/premium/2900932.png?token=exp=1649595513~hmac=5f0bb04561fa0856b66d8e45c2baa878")
        } else if (weather.includes("wind")) {
            return ("https://cdn-icons.flaticon.com/png/512/2900/premium/2900931.png?token=exp=1649595594~hmac=fd4e54e4005d9008deba1b9c3e77e172")
        } 
    }

    return (
        <img 
        src={url()} 
        alt={weatherType}
        width="80px"
        >

        </img>
    )
}

export default WeatherIcon;