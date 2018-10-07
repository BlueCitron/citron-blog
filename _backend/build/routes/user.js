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
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _user.getAllUsers)().then(respond).catch(handdleError);
}); // 한명의 유저 정보

userRouter.get('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _user.getUserById)(id).then(respond).catch(handdleError);
}); // 유저 등록

userRouter.post('/', function (req, res) {
  var user = req.body.user;

  var respond = function respond(result) {
    return res.json('success.. ');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _user.createUser)(user).then(respond).catch(handdleError);
}); // 유저 수정

userRouter.put('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;
  var user = req.body.user;

  var respond = function respond(result) {
    return res.json('success.. ');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _user.updateUser)(id, user).then(respond).catch(handdleError);
}); // 패스워드 변경

userRouter.put('/password/:id([0-9a-fA-F]{24})', function (req, res) {
  console.log('Check');
  var id = req.params.id;
  var password = req.body.password;

  var respond = function respond(result) {
    return res.json({
      success: true
    });
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json({
      success: false
    });
  };

  (0, _user.updatePassword)(id, password).then(respond).catch(handdleError);
}); // 유저 삭제

userRouter.delete('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _user.deleteUser)(id).then(respond).catch(handdleError);
});