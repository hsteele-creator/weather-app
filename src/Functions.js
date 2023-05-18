import React from "react";

export const GetWeather = (location) => {
  return fetch(
    `https://api.weatherbit.io/v2.0/currentkey=[d1aee21676684c8e83f65eff076b3c39]&city=${location}`
  ).then(data => data.json())
};


