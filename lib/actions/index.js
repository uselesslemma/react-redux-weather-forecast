'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_WEATHER = undefined;
exports.fetchWeather = fetchWeather;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Sign up for the OpenWeather 5 day weather forecast API at this URL:
 * https://openweathermap.org/forecast5
 * Copy your API key and paste it into the string below to use the app. 
 **/
var apiKey = '';
var rootUrl = 'http://api.openweathermap.org/data/2.5/forecast?&appid=' + apiKey;

var FETCH_WEATHER = exports.FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
  var url = rootUrl + '&q=' + city + ',us';

  // returns a promise that is passed into payload (below)
  var request = _axios2.default.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};