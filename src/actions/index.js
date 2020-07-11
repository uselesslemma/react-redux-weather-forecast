import axios from 'axios';

/* Sign up for the OpenWeather 5 day weather forecast API at this URL:
 * https://openweathermap.org/forecast5
 * Copy your API key and paste it into the string below to use the app. 
 **/
const apiKey = '';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  // returns a promise that is passed into payload (below)
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};