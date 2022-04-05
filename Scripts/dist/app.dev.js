"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = void 0;

var _data = require("./data.js");

var translate = function translate(input) {
  if (!input) {
    return "Please type a sentence";
  } else {
    var splitInput = input.toLowerCase().split("");
    var result = "";
    splitInput.forEach(function (letter) {
      if (!result) {
        result += "".concat(_data.library[letter]);
      } else {
        result += " ".concat(_data.library[letter]);
      }
    });
    return result;
  }
};

exports.translate = translate;