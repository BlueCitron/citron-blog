"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = require("../services/post");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postRouter = _express.default.Router();

exports.postRouter = postRouter;
postRouter.get('/latest', function (req, res) {
  var respond = function respond(result) {
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _post.getLatestPosts)().then(respond).catch(handleError);
});
postRouter.get('/:category([0-9a-fA-F]{24})', function (req, res) {
  var category = req.params.category;
  var _req$query = req.query,
      page = _req$query.page,
      perPage = _req$query.perPage;

  var respond = function respond(result) {
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _post.getPostsOfCategoryWithPaging)(category, page, perPage).then(respond).catch(handleError);
});
postRouter.post('/', function (req, res) {
  var post = req.body.post;

  var respond = function respond(result) {
    return res.json({
      success: true,
      post: post
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _post.createPost)(post).then(respond).catch(handleError);
});
postRouter.put('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;
  var post = req.body.post;

  var respond = function respond(result) {
    return res.json({
      success: true,
      post: post
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _post.updatePost)(_id, post).then(respond).catch(handleError);
});
postRouter.delete('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;

  var respond = function respond(result) {
    return res.json({
      success: true,
      _id: _id
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _post.deletePost)(_id).then(respond).catch(handleError);
});