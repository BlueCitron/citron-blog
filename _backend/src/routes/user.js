import express from 'express'
import { getAllUsers, getUserById, createUser, updateUser, updatePassword, deleteUser } from '../services/user'
import { login } from '../services/auth'

export const userRouter = express.Router();

// 모든 유저 정보 (추후 제거 예정)
userRouter.get('/', function(req, res) {
  const { params, query } = req

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

// 한명의 유저 정보
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

// 유저 등록
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

// 유저 수정
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

// 패스워드 변경
userRouter.put('/password/:id([0-9a-fA-F]{24})', function(req, res) {
  console.log('Check')
  const { id } = req.params;
  const { password } = req.body;

  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
    });
  }

  updatePassword(id, password)
    .then(respond)
    .catch(handdleError);

});


// 유저 삭제
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
