"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Item = require("./Item");

var _NavItem = require("./NavItem");

var _dishesUtils = require("../../../../utils/dishes-utils");

var _reactRedux = require("react-redux");

var _OrderFoodAction = require("../../OrderFoodAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _super.apply(this, arguments);
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          dishesList = _this$props.dishesList,
          loadingDishes = _this$props.loadingDishes,
          decreaseQuantity = _this$props.decreaseQuantity,
          increaseQuantity = _this$props.increaseQuantity,
          findDishesKey = _this$props.findDishesKey;
      var listCate = findDishesKey ? [{
        isSelected: true,
        dishesList: _dishesUtils.DISHES_DATA.Menu.filter(function (item) {
          var name = item.Name ? item.Name.toLowerCase() : null;
          return name ? name.includes(findDishesKey.toLowerCase()) : false;
        })
      }] : type;

      var renderItem = function renderItem(detail) {
        return /*#__PURE__*/_react.default.createElement(_Item.Item, {
          detail: detail,
          key: detail.Code,
          decreaseQuantity: decreaseQuantity,
          increaseQuantity: increaseQuantity
        });
      };

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !findDishesKey ? /*#__PURE__*/_react.default.createElement("ul", {
        className: "mp-menu-tab-nav nav nav-tabs",
        role: "tablist"
      }, listCate.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_NavItem.NavigationItem, {
          item: item,
          key: item.Code,
          navOnClicked: loadingDishes
        });
      })) : null, listCate.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tab-content menu-tab-content",
          key: item.Code
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tab-pane fade ".concat(item.isSelected ? "show active" : null),
          id: item.key,
          role: "tabpanel",
          "aria-labelledby": item.key
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tab-pane-details row"
        }, !findDishesKey ? dishesList.filter(function (el) {
          return el.parentKey === item.Code;
        }).map(function (detail) {
          return renderItem(detail);
        }) : item.dishesList.map(function (detail) {
          return renderItem(detail);
        }))));
      }));
    }
  }]);

  return MenuItem;
}(_react.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$foods = state.foods,
      dishesList = _state$foods.dishesList,
      type = _state$foods.type;
  return {
    dishesList: dishesList,
    type: type
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadingDishes: function loadingDishes(itemKey) {
      dispatch((0, _OrderFoodAction.loadingDishes)(itemKey));
    },
    decreaseQuantity: function decreaseQuantity(itemKey) {
      dispatch((0, _OrderFoodAction.decreaseQuantity)(itemKey));
    },
    increaseQuantity: function increaseQuantity(itemKey) {
      dispatch((0, _OrderFoodAction.increaseQuantity)(itemKey));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MenuItem);

exports.default = _default;