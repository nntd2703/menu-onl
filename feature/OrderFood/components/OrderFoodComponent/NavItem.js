"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationItem = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationItem = function NavigationItem(props) {
  var item = props.item,
      navOnClicked = props.navOnClicked;
  var Code = item.Code,
      key = item.key,
      isSelected = item.isSelected;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link ".concat(isSelected ? "active" : ''),
    "data-toggle": "tab",
    href: "#".concat(key),
    role: "tab",
    "aria-controls": key,
    "aria-selected": isSelected,
    onClick: function onClick() {
      return navOnClicked(Code);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "flaticon-018-lobster"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mpm-text"
  }, /*#__PURE__*/_react.default.createElement("h5", null, item.Name), /*#__PURE__*/_react.default.createElement("p", null, "Weekdays 8:30a.m. \u2014 11:30a.m."))));
};

exports.NavigationItem = NavigationItem;