'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Chart = require('../components/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _GoogleMap = require('../components/GoogleMap');

var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherList = function (_Component) {
  _inherits(WeatherList, _Component);

  function WeatherList() {
    _classCallCheck(this, WeatherList);

    return _possibleConstructorReturn(this, (WeatherList.__proto__ || Object.getPrototypeOf(WeatherList)).apply(this, arguments));
  }

  _createClass(WeatherList, [{
    key: 'renderWeather',
    value: function renderWeather(cityData) {
      var name = cityData.city.name;
      var temps = cityData.list.map(function (weather) {
        return (weather.main.temp - 273.15) * (9 / 5) + 32;
      });
      var pressures = cityData.list.map(function (weather) {
        return weather.main.pressure;
      });
      var humidities = cityData.list.map(function (weather) {
        return weather.main.humidity;
      });
      var _cityData$city$coord = cityData.city.coord,
          lon = _cityData$city$coord.lon,
          lat = _cityData$city$coord.lat;


      return _react2.default.createElement(
        'tr',
        { key: name },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_GoogleMap2.default, { lon: lon, lat: lat })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Chart2.default, { data: temps, color: 'red', units: '\xB0F' })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Chart2.default, { data: pressures, color: 'orange', units: 'hPa' })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Chart2.default, { data: humidities, color: 'blue', units: '%' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: 'table table-hover' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'City'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Temperature [K]'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Pressure [hPa]'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Humidity [%]'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.props.weather.map(this.renderWeather)
        )
      );
    }
  }]);

  return WeatherList;
}(_react.Component);

;

function mapStateToProps(_ref) {
  var weather = _ref.weather;

  return { weather: weather };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WeatherList);