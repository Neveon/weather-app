import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import WeatherState from './context/WeatherState';

const App = ({ getWeather }) => {
  return (
    <WeatherState>
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-5 title-container'>
                <Titles />
              </div>

              <div className='col-7 form-container'>
                <Form />
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WeatherState>
  );
};

export default App;
