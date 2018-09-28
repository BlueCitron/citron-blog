"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var CategorySchema = new Schema({
  name: String,
  createdBy: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

var Category = _mongoose.default.model('category', CategorySchema);

exports.Category = Category;