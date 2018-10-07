"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _category = require("../models/category");

var _user = require("./user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllCategories =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _category.Category.find().populate('createdBy', 'nickname'));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllCategories() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllCategories = getAllCategories;

var getCategoryById =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _category.Category.find({
              _id: id
            }).populate('createdBy', 'nickname'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getCategoryById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCategoryById = getCategoryById;

var createCategory =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref4) {
    var name, createdBy, isExist;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _ref4.name, createdBy = _ref4.createdBy;
            _context3.next = 3;
            return _category.Category.find({
              name: name
            });

          case 3:
            isExist = _context3.sent;

            if (!(isExist.length == 0)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", _category.Category.create({
              name: name,
              createdBy: createdBy
            }));

          case 8:
            console.log('Validation Fail..');
            throw 'Validation Fail..';

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createCategory(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createCategory = createCategory;

var updateCategory =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(id, _ref6) {
    var name;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = _ref6.name;
            return _context4.abrupt("return", _category.Category.update({
              _id: id
            }, {
              $set: {
                name: name
              }
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateCategory(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateCategory = updateCategory;

var deleteCategory =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _category.Category.deleteOne({
              _id: id
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteCategory(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteCategory = deleteCategory;