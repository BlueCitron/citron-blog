"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var PostSchema = new Schema({
  title: String,
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
  viewCount: {
    type: Number,
    default: 0
  },
  comments: {
    type: [],
    default: []
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

var Post = _mongoose.default.model('post', PostSchema);

exports.Post = Post;