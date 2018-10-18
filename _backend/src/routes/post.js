import express from 'express';
import { getLatestPosts, getAllPostsOfCategory, getPostsOfCategoryWithPaging, createPost, updatePost, deletePost } from '../services/post';

export const postRouter = express.Router();

postRouter.get('/latest', function(req, res) {

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

  getLatestPosts()
    .then(respond)
    .catch(handleError);
});

postRouter.get('/:category([0-9a-fA-F]{24})', function(req, res) {

  const { category } = req.params;
  const { page, perPage } = req.query;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getPostsOfCategoryWithPaging(category, page, perPage)
    .then(respond)
    .catch(handleError);
});

postRouter.post('/', function(req, res) {
  const { post } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      post
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  createPost(post)
    .then(respond)
    .catch(handleError);

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

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  updatePost(_id, post)
    .then(respond)
    .catch(handleError);

});

postRouter.delete('/:_id([0-9a-fA-F]{24})', function(req, res) {

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

  deletePost(_id)
    .then(respond)
    .catch(handleError);

});
