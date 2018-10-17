import express from 'express';
import { getLatestPosts, getAllPostsOfCategory, getPostsOfCategoryWithPaging, createPost, updatePost, deletePost } from '../services/post';

export const postRouter = express.Router();

const handdleError = (error) => {
  console.log(error);
  return res.status(500).json({
    success: false,
    message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
  });
}

postRouter.get('/latest', function(req, res) {

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  getLatestPosts()
    .then(respond)
    .catch(handdleError);
});

postRouter.get('/:category([0-9a-fA-F]{24})', function(req, res) {

  const { category } = req.params;
  const { page, perPage } = req.query;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  getPostsOfCategoryWithPaging(category, page, perPage)
    .then(respond)
    .catch(handdleError);
});

postRouter.post('/', function(req, res) {
  const { post } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      post
    });
  }

  createPost(post)
    .then(respond)
    .catch(handdleError);

});

postRouter.put('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;
  const { post } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      post
    });
  }

  updatePost(_id, post)
    .then(respond)
    .catch(handdleError);

});

postRouter.delete('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;

  const respond = (result) => {
    return res.json({
      success: true,
      _id
    });
  }

  deletePost(_id)
    .then(respond)
    .catch(handdleError);

});
