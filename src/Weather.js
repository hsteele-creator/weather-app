import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const apiKey = "T7YZ8RPUW3YW3ZF9NYQGSKT8W";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedLocations, setSavedLocations] = useState([])

//   resolvedAddress

// const checkForDoubles = () => {
//     savedLocations.some(city => city.resolvedAddress === data.resolvedAddress) ? alert("You can't add the same location twice")
// }

const removeDuplicates = (newValue, arr) => {
    return [...newValue, Set(arr)]
}

  console.log(savedLocations)

  useEffect(() => {
    function getWeather() {
      const response = fetch(`${baseURL}/${location}?key=${apiKey}`)
        .then((result) => result.json())
        .then((data) => setSavedLocations(savedLocations => [savedLocations, data])).then(setLocation(""))
    }

    if (location !== "") {
      getWeather();
    }
  }, [submitted]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={submit}>
        <input type="text" name="location" onChange={handleChange} value={location}></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Weather;
