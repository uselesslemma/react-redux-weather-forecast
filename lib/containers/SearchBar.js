'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = { term: '' };

    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(e) {
      e.preventDefault();

      // fetch some weather info
      this.props.fetchWeather(this.state.term);
      this.setState({ term: '' });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      this.setState({ term: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        {
          onSubmit: this.onFormSubmit,
          className: 'input-group' },
        _react2.default.createElement('input', {
          placeholder: 'Get a five-day forecast in your favorite cities',
          className: 'form-control',
          value: this.state.term,
          onChange: this.onInputChange }),
        _react2.default.createElement(
          'span',
          { className: 'input-group-btn' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-secondary' },
            'Submit'
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

;

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchWeather: _index.fetchWeather }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SearchBar);