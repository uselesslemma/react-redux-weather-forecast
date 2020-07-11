'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _WeatherReducer = require('./WeatherReducer');

var _WeatherReducer2 = _interopRequireDefault(_WeatherReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  weather: _WeatherReducer2.default
});

exports.default = rootReducer;