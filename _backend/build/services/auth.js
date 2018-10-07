"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = exports.createRefreshToken = exports.createAccessToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _crypto = _interopRequireDefault(require("crypto"));

var _user = require("../models/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SECRET = 'YogertStrawberry';

var createAccessToken = function createAccessToken(userInfo) {
  return _jsonwebtoken.default.sign({
    user: userInfo
  }, SECRET, {
    expiresIn: '1d',
    issuer: 'BlueCitron',
    subject: 'accessToken'
  });
};

exports.createAccessToken = createAccessToken;

var createRefreshToken = function createRefreshToken(userInfo) {
  return _jsonwebtoken.default.sign({
    user: userInfo
  }, SECRET, {
    expiresIn: '14d',
    issuer: 'BlueCitron',
    subject: 'refreshToken'
  });
};

exports.createRefreshToken = createRefreshToken;

var authenticate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(account, password) {
    var user, userNotFoundException, encryptedPassword, passwordNotMatchedException, _id, nickname, createdAt, lastLogin, accountType, userInfo, accessToken, refreshToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user.User.findOne({
              account: account
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            userNotFoundException = new Error('사용자를 찾을 수 없습니다.');
            userNotFoundException.status = 404;
            throw userNotFoundException;

          case 7:
            encryptedPassword = _crypto.default.createHmac('sha256', SECRET).update(password).digest('base64');

            if (!(user.password != encryptedPassword)) {
              _context.next = 12;
              break;
            }

            passwordNotMatchedException = new Error('패스워드가 일치하지 않아요.');
            passwordNotMatchedException.status = 401;
            throw passwordNotMatchedException;

          case 12:
            _id = user._id, nickname = user.nickname, createdAt = user.createdAt, lastLogin = user.lastLogin, accountType = user.accountType;
            userInfo = {
              _id: _id,
              nickname: nickname,
              createdAt: createdAt,
              lastLogin: lastLogin,
              accountType: accountType
            };
            accessToken = createAccessToken(userInfo);
            refreshToken = createRefreshToken(userInfo);
            return _context.abrupt("return", {
              accessToken: accessToken,
              refreshToken: refreshToken
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function authenticate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.authenticate = authenticate;