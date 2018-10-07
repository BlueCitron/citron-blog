"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _comment = require("../services/comment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentRouter = _express.default.Router();

exports.commentRouter = commentRouter;
commentRouter.get('/:postId([0-9a-fA-F]{24})', function (req, res) {
  var postId = req.params.postId;

  var respond = function respond(result) {
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _comment.getSCommentByPostId)(postId).then(respond).catch(handdleError);
});
commentRouter.post('/', function (req, res) {
  var comment = req.body.comment;

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _comment.createComment)(comment).then(respond).catch(handdleError);
});
commentRouter.put('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;
  var comment = req.body.comment;

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _comment.updateComment)(id, comment).then(respond).catch(handdleError);
});
commentRouter.delete('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _comment.deleteComment)(id).then(respond).catch(handdleError);
});