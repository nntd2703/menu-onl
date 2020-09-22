"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dishesUtils = require("../utils/dishes-utils");

var _constant = require("../utils/constant");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var firstItemKey = 'SA';

var loadingItem = function loadingItem(itemKey) {
  return _dishesUtils.DISHES_DATA.Menu.reduce(function (c, n) {
    return n.parentKey === itemKey ? [].concat(_toConsumableArray(c), [n]) : c;
  }, []);
};

var initialStateDishes = {
  dishesList: loadingItem(firstItemKey),
  type: _dishesUtils.DISHES_DATA.Type.map(function (item, index) {
    return _objectSpread(_objectSpread({}, item), {}, {
      isSelected: index === 0
    });
  }),
  updatedItem: null
};

var editQuantityItem = function editQuantityItem(itemKey, dishesList, action) {
  var data = _toConsumableArray(dishesList);

  var item = data.find(function (item) {
    return item.Code === itemKey;
  });
  item.quantity = action === _constant.ACTION.increaseQuantity ? item.quantity + 1 : item.quantity - 1;
  return data;
};

var foods = function foods() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateDishes;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant.ACTION.dishesTypeClicked:
      return {
        type: _toConsumableArray(state.type).reduce(function (c, n) {
          return [].concat(_toConsumableArray(c), [_objectSpread(_objectSpread({}, n), {}, {
            isSelected: n.Code === action.itemKey
          })]);
        }, []),
        dishesList: [].concat(_toConsumableArray(state.dishesList), _toConsumableArray(loadingItem(action.itemKey)))
      };

    case _constant.ACTION.increaseQuantity:
      return _objectSpread(_objectSpread({}, state), {}, {
        dishesList: editQuantityItem(action.itemKey, state.dishesList, _constant.ACTION.increaseQuantity),
        updatedItem: _toConsumableArray(state.dishesList).find(function (item) {
          return item.Code === action.itemKey;
        })
      });

    case _constant.ACTION.decreaseQuantity:
      return _objectSpread(_objectSpread({}, state), {}, {
        dishesList: editQuantityItem(action.itemKey, state.dishesList, _constant.ACTION.decreaseQuantity),
        updatedItem: _toConsumableArray(state.dishesList).find(function (item) {
          return item.Code === action.itemKey;
        })
      });

    case _constant.ACTION.cleanToastItem:
      console.log(state);
      return _objectSpread(_objectSpread({}, state), {}, {
        updatedItem: null
      });

    default:
      return state;
  }
};

var _default = foods;
exports.default = _default;