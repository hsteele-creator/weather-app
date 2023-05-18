import React from "react";
import { GetWeather } from "./Functions";
import { useEffect, useState } from "react";

const Weather = () => {
    const [location, setLocation] = useState("")
    const [data, setData] = useState([]);

    useEffect(() => {
       if(location !== "") {
        setData(GetWeather(location))
       };
    })

    return (
        <>
        <h1>Weather</h1>
        <input type="text" name="location"></input>
        <button>Submit</button>
        </>
    )
}

export default Weather