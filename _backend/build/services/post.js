"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostsOfCategoryWithPaging = exports.getAllPostsOfCategory = void 0;

var _post = require("../models/post");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllPostsOfCategory =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(category_id) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _post.Post.find({
              category: category_id,
              isDeleted: false
            }).populate('category', 'name').populate('createdBy', 'nickname'));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllPostsOfCategory(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllPostsOfCategory = getAllPostsOfCategory;

var getPostsOfCategoryWithPaging =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(category_id, page, perPage) {
    var skip, limit;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            skip = (page - 1) * perPage;
            limit = perPage / 1;
            return _context2.abrupt("return", _post.Post.find({
              category: category_id,
              isDeleted: false
            }).skip(skip).limit(limit).populate('category', 'name').populate('createdBy', 'nickname'));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getPostsOfCategoryWithPaging(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPostsOfCategoryWithPaging = getPostsOfCategoryWithPaging;

var createPost =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref4) {
    var category, title, content, createdBy;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            category = _ref4.category, title = _ref4.title, content = _ref4.content, createdBy = _ref4.createdBy;
            console.log('category : ', category);
            console.log('title : ', title);
            console.log('content : ', content);
            console.log('createdBy : ', createdBy);
            return _context3.abrupt("return", _post.Post.create({
              category: category,
              title: title,
              content: content,
              createdBy: createdBy
            }));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createPost(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createPost = createPost;

var updatePost =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_id, _ref6) {
    var category, title, content;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            category = _ref6.category, title = _ref6.title, content = _ref6.content;
            return _context4.abrupt("return", _post.Post.update({
              _id: _id
            }, {
              $set: {
                category: category,
                title: title,
                content: content,
                updatedAt: Date()
              }
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updatePost(_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updatePost = updatePost;

var deletePost =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _post.Post.update({
              _id: _id
            }, {
              $set: {
                isDeleted: true
              }
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deletePost(_x8) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deletePost = deletePost;