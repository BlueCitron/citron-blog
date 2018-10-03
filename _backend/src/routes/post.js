import express from 'express';
import { getAllPostsOfCategory, getPostsOfCategoryWithPaging, createPost, updatePost, deletePost } from '../services/post';

export const postRouter = express.Router();

// postRouter.get('/:category([0-9a-fA-F]{24})', function(req, res) {
//
//   const { category } = req.params;
//
//   const respond = (result) => {
//     if(!result)
//       return res.status(404).json('Not Found..');
//     return res.json(result);
//   }
//
//   const handdleError = (error) => {
//     console.log(error);
//     return res.status(500).json('failure..');
//   }
//
//   getAllPostsOfCategory(category)
//     .then(respond)
//     .catch(handdleError);
//
// });

postRouter.get('/:category([0-9a-fA-F]{24})', function(req, res) {

  const { category } = req.params;
  const { page, perPage } = req.query;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getPostsOfCategoryWithPaging(category, page, perPage)
    .then(respond)
    .catch(handdleError);
});

postRouter.post('/', function(req, res) {
  const { post } = req.body;
  console.log('Insert Post..', post)

  const respond = (result) => {
    return res.json('success..');
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  createPost(post)
    .then(respond)
    .catch(handdleError);

});

postRouter.put('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;
  const { post } = req.body;

  const respond = (result) => {
    return res.json('success..');
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  updatePost(id, post)
    .then(respond)
    .catch(handdleError);

});

postRouter.delete('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;

  const respond = (result) => {
    return res.json('success..');
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  deletePost(id)
    .then(respond)
    .catch(handdleError);

});
