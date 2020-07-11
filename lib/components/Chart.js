'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSparklines = require('react-sparklines');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var average = function average(data) {
  return _lodash2.default.round(_lodash2.default.sum(data) / data.length);
};

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactSparklines.Sparklines,
      { height: 120, width: 180, data: props.data },
      _react2.default.createElement(_reactSparklines.SparklinesLine, { color: props.color }),
      _react2.default.createElement(_reactSparklines.SparklinesReferenceLine, { type: 'avg' })
    ),
    _react2.default.createElement(
      'div',
      null,
      average(props.data),
      ' ',
      props.units
    )
  );
};