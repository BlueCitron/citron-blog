"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var CommentSchema = new Schema({
  content: String,
  createdBy: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isChild: {
    type: Boolean,
    default: false
  },
  parent: {
    type: Schema.Types.ObjectId,
    default: null
  }
});

var Comment = _mongoose.default.model('comment', CommentSchema);

exports.Comment = Comment;