import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Loading from './components/Loading';

class App extends React.Component {
  // React 16 state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  // Arrow functions allow automatic binding to component
  // Async await makes hhtp requests, rep/req easier
  getWeather = async e => {
    // Prevent default behavior of this component - prevents page refresh
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // When making the call use await, fetch( {URL GOES HERE} )
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${
        process.env.API_KEY
      }&units=imperial`
    );
    //JSON - readable format
    const data = await api_call.json();
    console.log(data);

    data.cod !== '404' // If there is no data.cod 404 error
      ? this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        })
      : this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: data.message
        });
  };
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-5 title-container'>
                  <Titles />
                </div>

                <div className='col-7 form-container'>
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
