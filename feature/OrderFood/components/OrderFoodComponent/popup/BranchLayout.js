"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactBootstrap = require("react-bootstrap");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BranchLayout = function BranchLayout(props) {
  var _props$item = props.item,
      key = _props$item.key,
      name = _props$item.name,
      address = _props$item.address,
      hotLine = _props$item.hotLine,
      openTime = _props$item.openTime;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "branch-option"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-2 col-4 flex-c flex-m"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "max-w-full max-h-full",
    src: require('../../../../../images/icons/logo.png')
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-m-10 col-8"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "m-b-0 txt24"
  }, name))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row m-t-10"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "m-b-0 txt25 col-md-8 col-12"
  }, address), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 text-right col-12"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:+".concat(openTime),
    className: "m-b-0 txt25 t-right"
  }, "Hotline: ".concat(hotLine)), /*#__PURE__*/_react.default.createElement("p", {
    className: "m-b-0 txt25 t-right"
  }, "Open Time: ".concat(openTime)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "w-50 pick-up-button m-t-10",
    variant: "danger",
    disabled: props.disableButton,
    onClick: function onClick() {
      return props.chooseBranchClicked(key);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "pick-up-label m-0 p-0"
  }, "Pick up from this branch")))));
};

var _default = BranchLayout;
exports.default = _default;