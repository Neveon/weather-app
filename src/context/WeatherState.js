import React, { useReducer } from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

import { GET_WEATHER } from './types';

let weatherAppId;

if (process.env.NODE_ENV !== 'production') {
  weatherAppId = process.env.REACT_APP_API_KEY;
} else {
  weatherAppId = process.env.API_KEY;
}

const WeatherState = props => {
  // Global state
  const initialState = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Get Weather
  const getWeather = async (city, country) => {
    // When making the call use await, fetch( {URL GOES HERE} )
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${weatherAppId}&units=imperial`
    );

    const data = await api_call.json(); //JSON - readable format

    data.cod && data.cod !== '404' // If there is no 404 error (no data found)
      ? // Dispatch data, Reducer responsible of putting it in the state and
        // sending it down to any components
        dispatch({
          type: GET_WEATHER,
          payload: {
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
          }
        })
      : dispatch({
          type: GET_WEATHER,
          payload: {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: data.message
          }
        });
  };

  return (
    <WeatherContext.Provider
      value={{
        temperature: state.temperature,
        city: state.city,
        country: state.country,
        humidity: state.humidity,
        description: state.description,
        error: state.error,
        getWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
