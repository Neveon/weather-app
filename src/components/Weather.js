import React from 'react';
import Loading from '../components/Loading';

// No state so reformat for better readability

const Weather = props => (
  <div className='weather__info'>
    {props.city && props.country && (
      <p className='weather__key'>
        Location:{' '}
        <span className='weather__value'>
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className='weather__key'>
        Temperature:{' '}
        <span className='weather__value'>{props.temperature}°F</span>
      </p>
    )}
    {props.humidity && (
      <p className='weather__key'>
        Humidity: <span className='weather__value'>{props.humidity}</span>
      </p>
    )}
    {props.description ? (
      <p className='weather__key'>
        Description: <span className='weather__value'>{props.description}</span>
      </p>
    ) : (
      <Loading />
    )}
    {props.error ? (
      <p className='weather__error'>{props.error}</p>
    ) : (
      <Loading />
    )}
  </div>
);
export default Weather;
