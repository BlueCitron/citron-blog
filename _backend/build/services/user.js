"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updatePassword = exports.updateUser = exports.createUser = exports.getUserByAccount = exports.getUserById = exports.getAllUsers = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _user = require("../models/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SECRET = 'YogertStrawberry';

var getAllUsers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _user.User.find({
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllUsers = getAllUsers;

var getUserById =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _user.User.findOne({
              _id: _id,
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var getUserByAccount =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(account) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _user.User.find({
              account: account,
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getUserByAccount(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserByAccount = getUserByAccount;

var createUser =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref5) {
    var account, password, nickname, email, encryptedPassword;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            account = _ref5.account, password = _ref5.password, nickname = _ref5.nickname, email = _ref5.email;
            encryptedPassword = _crypto.default.createHmac('sha256', SECRET).update(password).digest('base64');
            return _context4.abrupt("return", _user.User.create({
              account: account,
              password: encryptedPassword,
              nickname: nickname,
              email: email
            }));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createUser(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_id, _ref7) {
    var nickname, email;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            nickname = _ref7.nickname, email = _ref7.email;
            return _context5.abrupt("return", _user.User.update({
              _id: _id
            }, {
              $set: {
                nickname: nickname,
                email: email
              }
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updateUser(_x4, _x5) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var updatePassword =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_id, password) {
    var encryptedPassword;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            encryptedPassword = _crypto.default.createHmac('sha256', SECRET).update(password).digest('base64');
            return _context6.abrupt("return", _user.User.update({
              _id: _id
            }, {
              $set: {
                password: encryptedPassword
              }
            }));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function updatePassword(_x6, _x7) {
    return _ref8.apply(this, arguments);
  };
}();

exports.updatePassword = updatePassword;

var deleteUser =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(_id) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _user.User.update({
              _id: _id
            }, {
              $set: {
                isDeleted: true,
                deletedAt: Date()
              }
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function deleteUser(_x8) {
    return _ref9.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;