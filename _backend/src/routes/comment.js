import express from 'express';
import { getAllComments, getCommentByPostId, createComment, updateComment, deleteComment} from '../services/comment';

export const commentRouter = express.Router();

// 모든 댓글
commentRouter.get('/', function(req, res) {

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getAllComments()
    .then(respond)
    .catch(handdleError);

});

// 특정 포스트의 댓글
commentRouter.get('/:postId([0-9a-fA-F]{24})', function(req, res) {

  const { postId } = req.params;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getCommentByPostId(postId)
    .then(respond)
    .catch(handdleError);

});

commentRouter.post('/', function(req, res) {

  const { comment } = req.body;
  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  createComment(comment)
    .then(respond)
    .catch(handdleError);

});

commentRouter.put('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;
  const { comment } = req.body;

  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  updateComment(id, comment)
    .then(respond)
    .catch(handdleError);

});

commentRouter.delete('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;

  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  deleteComment(id)
    .then(respond)
    .catch(handdleError);

});
