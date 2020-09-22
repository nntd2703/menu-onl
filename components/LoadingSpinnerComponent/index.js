"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSpinners = require("react-spinners");

var _core = require("@emotion/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// Can be a string as well. Need to ensure each key-value pair ends with ;
var override = process.env.NODE_ENV === "production" ? {
  name: "1emvaom-override",
  styles: "display:block;margin:0 auto;border-color:red;;label:override;"
} : {
  name: "1emvaom-override",
  styles: "display:block;margin:0 auto;border-color:red;;label:override;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyQ29tcG9uZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lckNvbXBvbmVudC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtIYXNoTG9hZGVyfSBmcm9tIFwicmVhY3Qtc3Bpbm5lcnNcIjtcbmltcG9ydCB7Y3NzfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG4vLyBDYW4gYmUgYSBzdHJpbmcgYXMgd2VsbC4gTmVlZCB0byBlbnN1cmUgZWFjaCBrZXktdmFsdWUgcGFpciBlbmRzIHdpdGggO1xuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG5gO1xuXG5jbGFzcyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bG9hZGluZ30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxIYXNoTG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e292ZXJyaWRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJyZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIC8+IDogbnVsbFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NwaW5uZXJDb21wb25lbnQ7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var LoadingSpinnerComponent = /*#__PURE__*/function (_Component) {
  _inherits(LoadingSpinnerComponent, _Component);

  var _super = _createSuper(LoadingSpinnerComponent);

  function LoadingSpinnerComponent() {
    _classCallCheck(this, LoadingSpinnerComponent);

    return _super.apply(this, arguments);
  }

  _createClass(LoadingSpinnerComponent, [{
    key: "render",
    value: function render() {
      var loading = this.props.loading;
      return loading ? /*#__PURE__*/_react.default.createElement(_reactSpinners.HashLoader, {
        css: override,
        size: 80,
        color: "red",
        loading: loading
      }) : null;
    }
  }]);

  return LoadingSpinnerComponent;
}(_react.Component);

var _default = LoadingSpinnerComponent;
exports.default = _default;