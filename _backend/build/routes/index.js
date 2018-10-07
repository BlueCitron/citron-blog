"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _category = require("./category");

var _user = require("./user");

var _post = require("./post");

var _comment = require("./comment");

var _auth = require("./auth");

var _auth2 = require("../services/auth");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.json('Hello World');
});
router.use('/category', _category.categoryRouter);
router.use('/user', _user.userRouter);
router.use('/post', _post.postRouter);
router.use('/comment', _comment.commentRouter);
router.use('/auth', _auth.authRouter);
router.get('/login', function (req, res) {
  var userInfo = {
    account: 'sds901234',
    password: '1234'
  };
  (0, _auth2.login)(userInfo).then(function (result) {
    console.log('Login Result : ', result);

    if (result != []) {
      _jsonwebtoken.default.sign({
        result: result
      });
    }
  }).catch(function (err) {
    console.log(err);
  });
  res.send('login');
});
var _default = router;
exports.default = _default;