"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _util = require("../services/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utilRouter = _express.default.Router();

exports.utilRouter = utilRouter;
utilRouter.get('/postview/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;

  var respond = function respond(result) {
    return res.json({
      success: true
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _util.viewPost)(_id).then(respond).catch(handleError);
});
utilRouter.get('/duplicate', function (req, res) {
  var _req$query = req.query,
      account = _req$query.account,
      nickname = _req$query.nickname,
      email = _req$query.email;

  var respond = function respond(result) {
    if (!result) {
      return res.json({
        success: true,
        message: '사용할 수 있습니다.'
      });
    }

    return res.json({
      success: false,
      message: '중복된 결과입니다.'
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  if (account !== undefined) {
    (0, _util.isDuplicatedAccount)(account).then(respond).catch(handleError);
  } else if (nickname !== undefined) {
    (0, _util.isDuplicatedNickname)(nickname).then(respond).catch(handleError);
  } else if (email !== undefined) {
    (0, _util.isDuplicatedEmail)(email).then(respond).catch(handleError);
  }
});
utilRouter.get('/duplicate', function (req, res) {});