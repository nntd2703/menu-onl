"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetupRouter;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./feature/Home/Home"));

var _FoodOrder = _interopRequireDefault(require("./feature/FoodOrder"));

var _Login = _interopRequireDefault(require("./components/Login"));

var _UserManagement = _interopRequireDefault(require("./feature/UserManagement/UserManagement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
function SetupRouter() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_Home.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/login"
  }, /*#__PURE__*/_react.default.createElement(LoginPage, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/order-online"
  }, /*#__PURE__*/_react.default.createElement(_FoodOrder.default, null)), /*#__PURE__*/_react.default.createElement(PrivateRoute, {
    exact: true,
    path: "/user-manage"
  }, /*#__PURE__*/_react.default.createElement(_UserManagement.default, null)))));
}