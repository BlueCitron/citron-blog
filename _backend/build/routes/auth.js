"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../middlewares/auth");

var _auth2 = require("../services/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authRouter = _express.default.Router();

exports.authRouter = authRouter;
authRouter.post('/', function (req, res) {
  var _req$body = req.body,
      account = _req$body.account,
      password = _req$body.password;

  var respond = function respond(result) {
    res.json(_objectSpread({
      success: true
    }, result));
  };

  var handdleError = function handdleError(error) {
    res.status(error.stats || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _auth2.authenticate)(account, password).then(respond).catch(handdleError);
});
authRouter.get('/verify', _auth.authMiddleware, function (req, res) {
  var decoded = req.decoded;

  if (decoded.sub == 'accessToken') {
    res.json(_objectSpread({
      success: true,
      message: '유효한 토큰입니다.'
    }, decoded));
  } else {
    res.stats(400).json({
      success: false,
      message: 'Not an accessToken'
    });
  }
});
authRouter.post('/refresh', _auth.authMiddleware, function (req, res) {
  var decoded = req.decoded;

  if (decoded.sub == 'refreshToken') {
    res.json({
      success: true,
      message: '유효한 토큰입니다.',
      accessToken: (0, _auth2.createAccessToken)(decoded.user),
      refreshToken: (0, _auth2.createRefreshToken)(decoded.user)
    });
  } else {
    res.stats(400).json({
      success: false,
      message: 'Not a refreshToken'
    });
  }
});