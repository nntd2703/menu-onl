"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BRANCH = exports.OPTION_TYPE = exports.ACTION = void 0;
var ACTION = {
  dishesTypeClicked: 'DISHES_TYPE_CLICKED',
  editQuantityItem: 'EDIT_QUANTITY',
  increaseQuantity: 'INCREASE_QUANTITY',
  decreaseQuantity: 'DECREASE_QUANTITY',
  updateReceiverPhoneNumber: 'UPDATE_DELIVERY_PHONE_NUMBER',
  updateReceiverName: 'UPDATE_DELIVERY_NAME',
  updateReceiverInformation: 'UPDATE_DELIVERY_INFORMATION',
  updateDeliveryType: 'UPDATE_DELIVERY_TYPE',
  cleanToastItem: 'CLEAN_TOAST_ITEM'
};
exports.ACTION = ACTION;
var OPTION_TYPE = {
  PickUp: 'pickup',
  Delivery: 'delivery'
};
exports.OPTION_TYPE = OPTION_TYPE;
var BRANCH = [{
  key: "bt",
  name: "Sushi Nhí Bình Thạnh",
  address: " 21 Nguyễn Công Trứ, Phường 19, Bình Thạnh, Hồ Chí Minh",
  hotLine: "0123456789",
  openTime: "11AM - 10:30PM"
}, {
  key: "d2",
  name: "Sushi Nhí Quận 2",
  address: " 210 Đường Trần Não, P. Bình An, Quận 2, Hồ Chí Minh",
  hotLine: "0123456789",
  openTime: "11AM - 10:30PM"
}];
exports.BRANCH = BRANCH;