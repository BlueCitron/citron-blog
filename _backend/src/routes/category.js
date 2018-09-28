import express from 'express';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory } from '../services/category'

export const categoryRouter  = express.Router();

categoryRouter.get('/', (req, res) => {

  const respond = (result) => {
    if(!result){
      return res.status(404).json('Not Found.');
    }

    return res.json(result);
  }

  const handleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getAllCategories()
    .then(respond)
    .catch(handleError);

});

categoryRouter.get('/:id([0-9a-fA-F]{24})', (req, res) => {

  const { id } = req.params;

  const respond = (result) => {
    if(!result)
      res.status(404).json('Not Found.');

    return res.json(result);
  }

  const handleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getCategoryById(id)
    .then(respond)
    .catch(handleError);

});

categoryRouter.post('/', (req, res) => {

  const { category } = req.body;

  const respond = (result) => {
    return res.json('success');
  }

  const handleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  createCategory(category)
    .then(respond)
    .catch(handleError);

});

categoryRouter.put('/:id([0-9a-fA-F]{24})', (req, res) => {

  const { id } = req.params;
  const { category } = req.body;

  const respond = (result) => {
    return res.json('success');
  }

  const handleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  updateCategory(id, category)
    .then(respond)
    .catch(handleError);

});

categoryRouter.delete('/:id([0-9a-fA-F]{24})', (req, res) => {

  const { id } = req.params;

  const respond = (result) => {
    if(!result)
      res.status(404).json('Not Found.');

    return res.json(result);
  }

  const handleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  deleteCategory(id)
    .then(respond)
    .catch(handleError);

});
