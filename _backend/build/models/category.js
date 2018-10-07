"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _ref;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose.default.Schema;
var CategorySchema = new Schema((_ref = {
  name: String,
  createdBy: Schema.Types.ObjectId
}, _defineProperty(_ref, "createdBy", {
  type: Schema.Types.ObjectId,
  ref: 'user'
}), _defineProperty(_ref, "createdAt", {
  type: Date,
  default: Date.now
}), _defineProperty(_ref, "updatedAt", {
  type: Date,
  default: Date.now
}), _ref));

var Category = _mongoose.default.model('category', CategorySchema);

exports.Category = Category;