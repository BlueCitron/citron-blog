"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("../services/user");

var _auth = require("../services/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express.default.Router(); // 모든 유저 정보 (추후 제거 예정)


exports.userRouter = userRouter;
userRouter.get('/', function (req, res) {
  var params = req.params,
      query = req.query;

  var respond = function respond(result) {
    if (!result) return res.status(404).json({
      success: false,
      message: '해당 하는 유저를 찾을 수 없습니다.'
    });
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.getAllUsers)().then(respond).catch(handleError);
}); // 한명의 유저 정보

userRouter.get('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;

  var respond = function respond(result) {
    if (!result) return res.status(404).json({
      success: false,
      message: '해당 하는 유저를 찾을 수 없습니다.'
    });
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.getUserById)(_id).then(respond).catch(handleError);
}); // 유저 등록

userRouter.post('/', function (req, res) {
  var _req$body = req.body,
      account = _req$body.account,
      password = _req$body.password,
      nickname = _req$body.nickname,
      email = _req$body.email;

  var respond = function respond(result) {
    var _id = result._id,
        account = result.account,
        nickname = result.nickname;
    return res.json({
      success: true,
      _id: _id,
      account: account,
      nickname: nickname
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.createUser)({
    account: account,
    password: password,
    nickname: nickname,
    email: email
  }).then(respond).catch(handleError);
}); // 유저 수정

userRouter.put('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;
  var _req$body2 = req.body,
      nickname = _req$body2.nickname,
      email = _req$body2.email;

  var respond = function respond(result) {
    return res.json({
      success: true,
      nickname: nickname,
      email: email
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.updateUser)(_id, {
    nickname: nickname,
    email: email
  }).then(respond).catch(handleError);
}); // 패스워드 변경

userRouter.put('/password/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;
  var password = req.body.password;

  var respond = function respond(result) {
    return res.json({
      success: true,
      message: '패스워드가 변경 되었습니다.'
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.updatePassword)(_id, password).then(respond).catch(handleError);
}); // 유저 삭제

userRouter.delete('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;

  var respond = function respond(result) {
    var n = result.n,
        ok = result.ok;

    if (n === 0) {
      return res.status(404).json({
        success: false,
        message: '유저를 찾을 수 없어요. 아이디를 확인해 주세요.'
      });
    }

    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _user.deleteUser)(_id).then(respond).catch(handleError);
});