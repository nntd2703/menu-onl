"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanUpdatedItemArr = void 0;

var _constant = require("../../../utils/constant");

var cleanUpdatedItemArr = function cleanUpdatedItemArr() {
  return {
    type: _constant.ACTION.cleanToastItem
  };
};

exports.cleanUpdatedItemArr = cleanUpdatedItemArr;