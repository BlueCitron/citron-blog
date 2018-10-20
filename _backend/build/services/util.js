"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDuplicatedEmail = exports.isDuplicatedNickname = exports.isDuplicatedAccount = exports.viewPost = void 0;

var _post = require("../models/post");

var _user = require("../models/user");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var viewPost =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_id) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _post.Post.findOneAndUpdate({
              _id: _id
            }, {
              $inc: {
                viewCount: 1
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function viewPost(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.viewPost = viewPost;

var isDuplicatedAccount =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(account) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _user.User.findOne({
              account: account
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function isDuplicatedAccount(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isDuplicatedAccount = isDuplicatedAccount;

var isDuplicatedNickname =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(nickname) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _user.User.findOne({
              nickname: nickname
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function isDuplicatedNickname(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isDuplicatedNickname = isDuplicatedNickname;

var isDuplicatedEmail =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(email) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _user.User.findOne({
              email: email
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function isDuplicatedEmail(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isDuplicatedEmail = isDuplicatedEmail;