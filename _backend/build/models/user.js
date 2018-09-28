"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var UserSchema = new Schema({
  accountType: {
    type: String,
    enum: ['DEFAULT', 'KAKAO', 'NAVER', 'FACEBOOK', 'GOOGLE'],
    default: 'DEFAULT',
    uppercase: true,
    trim: true
  },
  account: {
    type: String,
    unique: true,
    required: true,
    minlength: 6,
    maxlength: 20
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    minlength: 2,
    maxlength: 12
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updqtedAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  }
});

var User = _mongoose.default.model('user', UserSchema);

exports.User = User;