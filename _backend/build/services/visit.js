"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registToday = exports.getYesterday = exports.getToday = exports.hasVisitedToday = void 0;

var _visit = require("../models/visit");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hasVisitedToday =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(user_id) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function hasVisitedToday(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.hasVisitedToday = hasVisitedToday;

var getToday =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getToday() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getToday = getToday;

var getYesterday =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getYesterday() {
    return _ref3.apply(this, arguments);
  };
}();

exports.getYesterday = getYesterday;

var registToday =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(visit) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function registToday(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.registToday = registToday;