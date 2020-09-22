"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constant = require("../utils/constant");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialInformation = {
  name: null,
  phoneNumber: null,
  orderType: _constant.OPTION_TYPE.PickUp,
  pickUpBranch: null,
  deliveryInformation: null
};

var deliveryInformation = function deliveryInformation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInformation;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant.ACTION.updateReceiverPhoneNumber:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          phoneNumber: action.value
        });
      }

    case _constant.ACTION.updateReceiverName:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          name: action.value
        });
      }

    case _constant.ACTION.updateReceiverInformation:
      {
        console.log('action', action);
        return _objectSpread(_objectSpread({}, state), {}, {
          pickUpBranch: action.pickUpBranch,
          deliveryInformation: _objectSpread({}, action.deliveryInformation)
        });
      }

    case _constant.ACTION.updateDeliveryType:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          orderType: action.orderType
        });
      }

    default:
      return state;
  }
};

var _default = deliveryInformation;
exports.default = _default;