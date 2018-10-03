import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/user';

export const userRouter = express.Router();

userRouter.get('/', function(req, res) {

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getAllUsers()
    .then(respond)
    .catch(handdleError);

});

userRouter.get('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  getUserById(id)
    .then(respond)
    .catch(handdleError);

});

userRouter.post('/', function(req, res) {

  const { user } = req.body;

  const respond = (result) => {
    return res.json('success.. ');
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  createUser(user)
    .then(respond)
    .catch(handdleError);
});

userRouter.put('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;
  const { user } = req.body;

  const respond = (result) => {
    return res.json('success.. ');
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  updateUser(id, user)
    .then(respond)
    .catch(handdleError);

});

userRouter.delete('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;

  const respond = (result) => {
    if(!result)
      return res.status(404).json('Not Found..');
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  deleteUser(id)
    .then(respond)
    .catch(handdleError);

});
