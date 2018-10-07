"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.updateComment = exports.createComment = exports.getSCommentByPostId = void 0;

var _comment = require("../models/comment");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSCommentByPostId =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(postId) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _comment.Comment.find({
              postId: postId,
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSCommentByPostId(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSCommentByPostId = getSCommentByPostId;

var createComment =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var postId, content, createdBy, isChild, parent;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            postId = _ref3.postId, content = _ref3.content, createdBy = _ref3.createdBy, isChild = _ref3.isChild, parent = _ref3.parent;
            return _context2.abrupt("return", _comment.Comment.create({
              postId: postId,
              content: content,
              createdBy: createdBy,
              isChild: isChild,
              parent: parent
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createComment(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createComment = createComment;

var updateComment =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_id, _ref5) {
    var content;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            content = _ref5.content;
            return _context3.abrupt("return", _comment.Comment.update({
              _id: _id
            }, {
              $set: {
                content: content,
                updatedAt: Date()
              }
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateComment(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateComment = updateComment;

var deleteComment =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _comment.Comment.update({
              _id: _id
            }, {
              $set: {
                isDeleted: true
              }
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteComment(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteComment = deleteComment;