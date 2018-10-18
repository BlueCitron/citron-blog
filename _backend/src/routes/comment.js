import express from 'express';
import { getAllComments, getCommentByPostId, createComment, updateComment, deleteComment} from '../services/comment';

export const commentRouter = express.Router();

// 모든 댓글
commentRouter.get('/', function(req, res) {

  const respond = (result) => {

    return res.json(result);

  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getAllComments()
    .then(respond)
    .catch(handleError);

});

// 특정 포스트의 댓글
commentRouter.get('/:postId([0-9a-fA-F]{24})', function(req, res) {

  const { postId } = req.params;

  const respond = (result) => {
    return res.json(result);
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getCommentByPostId(postId)
    .then(respond)
    .catch(handleError);

});

commentRouter.post('/', function(req, res) {

  const { comment } = req.body;

  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  createComment(comment)
    .then(respond)
    .catch(handleError);

});

// TODO 입력값 검증해야됨
commentRouter.put('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;
  const { postId, content, createdBy, isChild, parent } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      _id, postId, content, createdBy, isChild, parent
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  updateComment(_id, comment)
    .then(respond)
    .catch(handleError);

});

commentRouter.delete('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;

  const respond = (result) => {
    return res.json({
      success: true,
      _id
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  deleteComment(_id)
    .then(respond)
    .catch(handleError);

});
