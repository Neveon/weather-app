import React, { useState, useContext } from 'react';
import WeatherContext from '../context/weatherContext';

//No State so reformat for better readability
// Instead of using 'this.props...' it is now just 'props...'
const Form = () => {
  const weatherContext = useContext(WeatherContext);

  const { getWeather } = weatherContext;

  // Setting state - state = { cityText: '', countryText: ''}
  const [cityText, setCityText] = useState('');
  const [countryText, setCountryText] = useState('');

  const onCityChange = e => setCityText(e.target.value);
  const onCountryChange = e => setCountryText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (cityText && countryText) {
      getWeather(cityText, countryText);
      setCityText('');
      setCountryText('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='City...'
        name='city'
        required
        value={cityText}
        onChange={onCityChange}
      />
      <input
        type='text'
        placeholder='Country...'
        name='country'
        required
        value={countryText}
        onChange={onCountryChange}
      />
      <input type='submit' value='Get Weather' />
    </form>
  );
};

export default Form;
