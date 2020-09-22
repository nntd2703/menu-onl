"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _orderFood = _interopRequireDefault(require("./orderFood"));

var _deliveryInformation = _interopRequireDefault(require("./deliveryInformation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  foods: _orderFood.default,
  deliveryInformation: _deliveryInformation.default
});

exports.default = _default;