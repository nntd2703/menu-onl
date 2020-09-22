"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
  apiKey: "AIzaSyBWGXfQZsVlIMNajAirrtIhQjeA7yIKGtc",
  authDomain: "sushinhivn.firebaseapp.com",
  databaseURL: "https://sushinhivn.firebaseio.com",
  projectId: "sushinhivn",
  storageBucket: "sushinhivn.appspot.com",
  messagingSenderId: "459515566691",
  appId: "1:459515566691:web:0f27d4b3ae6f6b8d81b656",
  measurementId: "G-GQV5H5E7F5"
};

_app.default.initializeApp(firebaseConfig);

var _default = _app.default;
exports.default = _default;