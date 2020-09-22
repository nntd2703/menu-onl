"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireWildcard(require("react"));

var _OrderFood = _interopRequireDefault(require("./feature/OrderFood"));

var _UserManagement = _interopRequireDefault(require("./feature/UserManagement/UserManagement"));

var _reactRouterDom = require("react-router-dom");

var _Login = _interopRequireDefault(require("./components/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading ...")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
    basename: "/"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/order-online"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/order-online",
    component: _OrderFood.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/login",
    component: LoginPage
  }), /*#__PURE__*/_react.default.createElement(PrivateRoute, {
    exact: true,
    path: "/user-manage",
    component: _UserManagement.default
  })))));
}

var fakeAuth = {
  isAuthenticated: false,
  authenticate: function authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout: function signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  var history = useHistory();
  return fakeAuth.isAuthenticated ? /*#__PURE__*/_react.default.createElement("p", null, "Welcome!", ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      fakeAuth.signout(function () {
        return history.push('/');
      });
    }
  }, "Sign out")) : /*#__PURE__*/_react.default.createElement("p", null, "You are not logged in.");
} // A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.


function PrivateRoute(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(_ref2) {
      var location = _ref2.location;
      return fakeAuth.isAuthenticated ? children : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: '/login',
          state: {
            from: location
          }
        }
      });
    }
  }));
}

function LoginPage() {
  var history = useHistory();
  var location = useLocation();

  var _ref3 = location.state || {
    from: {
      pathname: '/'
    }
  },
      from = _ref3.from;

  var login = function login() {
    fakeAuth.authenticate(function () {
      history.replace(from);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Login.default, {
    loginClicked: login
  }) // <div>
  //     <p>You must log in to view the page at {from.pathname}</p>
  // </div>
  ;
} // "start": "webpack-dev-server --open",
// "webpack-dev-server --mode development",
//
// SKIP_PREFLIGHT_CHECK=true