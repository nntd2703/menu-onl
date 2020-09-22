"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _reactBootstrap = require("react-bootstrap");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _headerMenu = _interopRequireDefault(require("../../../../images/header-menu-01.jpg"));

var _bgTitlePage = _interopRequireDefault(require("../../../../images/bg-title-page-01.jpg"));

var _PreOrder = _interopRequireDefault(require("./popup/PreOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var OrderFoodComponent = /*#__PURE__*/function (_Component) {
  _inherits(OrderFoodComponent, _Component);

  var _super = _createSuper(OrderFoodComponent);

  function OrderFoodComponent(props) {
    var _this;

    _classCallCheck(this, OrderFoodComponent);

    _this = _super.call(this, props);
    _this.state = {
      findDishesKey: undefined
    };
    return _this;
  }

  _createClass(OrderFoodComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery.default)(document).ready(function () {
        (0, _jquery.default)(window).scroll(function () {
          var bHeight = (0, _jquery.default)(window).height();
          var offset = (0, _jquery.default)(window).scrollTop();
          (0, _jquery.default)('.total-order').css({
            top: bHeight + offset - 77 + 'px'
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PreOrder.default, null), /*#__PURE__*/_react.default.createElement("div", {
        className: "order-food"
      }, /*#__PURE__*/_react.default.createElement("section", {
        className: "bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15",
        style: {
          backgroundImage: "url(" + _bgTitlePage.default + ")"
        }
      }, /*#__PURE__*/_react.default.createElement("h2", {
        className: "tit6 t-center"
      }, "Pato Menu")), /*#__PURE__*/_react.default.createElement("div", {
        className: "container p-t-20 p-b-20"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
        className: "search-dishes-input bo-rad-10 sizefull txt10 p-l-20",
        type: "text",
        placeholder: "Find By Name",
        value: this.state.findDishesKey,
        onChange: function onChange(e) {
          _this2.setState({
            findDishesKey: e.target.value
          });
        }
      }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Append, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
        variant: "outline-secondary",
        onClick: function onClick() {
          _this2.setState({
            findDishesKey: ''
          });
        }
      }, "Clear")))), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        findDishesKey: this.state.findDishesKey
      })), /*#__PURE__*/_react.default.createElement("section", {
        className: "section-lunch bgwhite"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "header-lunch parallax0 parallax100",
        style: {
          backgroundImage: "url(" + _headerMenu.default + ")"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "bg1-overlay t-center p-t-170 p-b-165"
      }, /*#__PURE__*/_react.default.createElement("h2", {
        className: "tit4 t-center"
      }, "Lunch"))))));
    }
  }]);

  return OrderFoodComponent;
}(_react.Component);

var _default = OrderFoodComponent;
exports.default = _default;