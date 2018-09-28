"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sample = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var SampleSchema = new Schema({
  title: String
});

var Sample = _mongoose.default.model('sample', SampleSchema);

exports.Sample = Sample;