"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _comment = require("../services/comment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentRouter = _express.default.Router(); // 모든 댓글


exports.commentRouter = commentRouter;
commentRouter.get('/', function (req, res) {
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

  (0, _comment.getAllComments)().then(respond).catch(handleError);
}); // 특정 포스트의 댓글

commentRouter.get('/:postId([0-9a-fA-F]{24})', function (req, res) {
  var postId = req.params.postId;

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

  (0, _comment.getCommentByPostId)(postId).then(respond).catch(handleError);
});
commentRouter.post('/', function (req, res) {
  var comment = req.body.comment;

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

  (0, _comment.createComment)(comment).then(respond).catch(handleError);
}); // TODO 입력값 검증해야됨

commentRouter.put('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;
  var _req$body = req.body,
      postId = _req$body.postId,
      content = _req$body.content,
      createdBy = _req$body.createdBy,
      isChild = _req$body.isChild,
      parent = _req$body.parent;

  var respond = function respond(result) {
    return res.json({
      success: true,
      _id: _id,
      postId: postId,
      content: content,
      createdBy: createdBy,
      isChild: isChild,
      parent: parent
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _comment.updateComment)(_id, comment).then(respond).catch(handleError);
});
commentRouter.delete('/:_id([0-9a-fA-F]{24})', function (req, res) {
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

  (0, _comment.deleteComment)(_id).then(respond).catch(handleError);
});