"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _lunch = _interopRequireDefault(require("../../../../images/lunch-01.jpg"));

var _reactBootstrap = require("react-bootstrap");

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
  var decreaseQuantity = props.decreaseQuantity,
      increaseQuantity = props.increaseQuantity;
  var _props$detail = props.detail,
      Name = _props$detail.Name,
      Price = _props$detail.Price,
      quantity = _props$detail.quantity,
      Code = _props$detail.Code;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dishes-item blo3 row m-b-30 col-md-6 col-sm-12",
    onClick: function onClick() {
      return console.log('first item');
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _lunch.default,
    alt: "IMG-MENU"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-blo3 col-md-9 col-7 dishes-details"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "txt21 m-b-3"
  }, Name), /*#__PURE__*/_react.default.createElement("div", {
    className: "txt23"
  }, "Aenean pharetra tortor dui in pellentesque"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price-content m-t-20 row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "txt22 col-5 col-md-7"
  }, Price), /*#__PURE__*/_react.default.createElement("div", {
    className: "txt22 col-7 col-md-5 action-button"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    disabled: quantity === 0,
    variant: "danger",
    onClick: function onClick() {
      decreaseQuantity(Code);
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaMinusCircle, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
    disabled: true,
    value: quantity,
    className: "custom-input",
    type: 'number',
    max: 99,
    placeholder: "1"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "success",
    onClick: function onClick() {
      increaseQuantity(Code);
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaPlusCircle, null))))));
};

exports.Item = Item;