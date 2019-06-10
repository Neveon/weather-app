# Weather-App
Type in the City and Country to receive the weather!

## API
[You must have an API Key from openweathermap before getting started](https://openweathermap.org/appid#get)

* Clone this repo <b>`git clone https://github.com/Neveon/weather-app.git`</b>
* Create a <code>.env.local</code> file in the root and in the file write, <b>`REACT_APP_API_KEY='YOUR_UNIQUE_API_KEY_HERE'`</b>
* Save and run <b>`npm start`</b>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Enjoy the weather!


### What I learned
* I learned to refactor code using Hooks with React 16.8 (`useState`, `useContext`)
* I learned more about Context and how similar it is to Redux
* Instead of using `useEffect` for the loading screen, I decided to `setTimeout` the `ReactDOM` so I can enjoy more of the raindrops
