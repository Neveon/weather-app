import React, { useContext } from 'react';
import WeatherContext from '../context/weatherContext';

// No state so reformat for better readability

const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    city,
    country,
    temperature,
    humidity,
    description,
    error
  } = weatherContext;

  return (
    <div className='weather__info'>
      {city && country && (
        <p className='weather__key'>
          Location:{' '}
          <span className='weather__value'>
            {city}, {country}
          </span>
        </p>
      )}
      {temperature && (
        <p className='weather__key'>
          Temperature: <span className='weather__value'>{temperature}°F</span>
        </p>
      )}
      {humidity && (
        <p className='weather__key'>
          Humidity: <span className='weather__value'>{humidity}</span>
        </p>
      )}
      {description && (
        <p className='weather__key'>
          Description: <span className='weather__value'>{description}</span>
        </p>
      )}
      {error && (
        <div>
          <p className='weather__error'>{error}</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
