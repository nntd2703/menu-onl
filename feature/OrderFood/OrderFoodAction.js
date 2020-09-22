"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeliveryType = exports.updateDeliveryInformation = exports.updateReceiverName = exports.updatePhoneNumber = exports.decreaseQuantity = exports.increaseQuantity = exports.loadingDishes = void 0;

var _constant = require("../../utils/constant");

var loadingDishes = function loadingDishes(itemKey) {
  return {
    type: _constant.ACTION.dishesTypeClicked,
    itemKey: itemKey
  };
};

exports.loadingDishes = loadingDishes;

var increaseQuantity = function increaseQuantity(itemKey) {
  return {
    type: _constant.ACTION.increaseQuantity,
    itemKey: itemKey
  };
};

exports.increaseQuantity = increaseQuantity;

var decreaseQuantity = function decreaseQuantity(itemKey) {
  return {
    type: _constant.ACTION.decreaseQuantity,
    itemKey: itemKey
  };
};

exports.decreaseQuantity = decreaseQuantity;

var updatePhoneNumber = function updatePhoneNumber(value) {
  return {
    type: _constant.ACTION.updateReceiverPhoneNumber,
    value: value
  };
};

exports.updatePhoneNumber = updatePhoneNumber;

var updateReceiverName = function updateReceiverName(value) {
  return {
    type: _constant.ACTION.updateReceiverName,
    value: value
  };
};

exports.updateReceiverName = updateReceiverName;

var updateDeliveryInformation = function updateDeliveryInformation(pickUpBranch, deliveryInformation) {
  return {
    type: _constant.ACTION.updateReceiverInformation,
    pickUpBranch: pickUpBranch,
    deliveryInformation: deliveryInformation
  };
};

exports.updateDeliveryInformation = updateDeliveryInformation;

var updateDeliveryType = function updateDeliveryType(orderType) {
  return {
    type: _constant.ACTION.updateDeliveryType,
    orderType: orderType
  };
};

exports.updateDeliveryType = updateDeliveryType;