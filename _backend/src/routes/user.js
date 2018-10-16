import express from 'express'
import { getAllUsers, getUserById, createUser, updateUser, updatePassword, deleteUser } from '../services/user'
import { login } from '../services/auth'

export const userRouter = express.Router();

// 모든 유저 정보 (추후 제거 예정)
userRouter.get('/', function(req, res) {
  const { params, query } = req

  const respond = (result) => {
    if(!result)
      return res.status(404).json({
        success: false,
        message: '해당 하는 유저를 찾을 수 없습니다.'
      });
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
    });
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
      return res.status(404).json({
        success: false,
        message: '해당 하는 유저를 찾을 수 없습니다.'
      });
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
    });
  }

  getUserById(id)
    .then(respond)
    .catch(handdleError);

});

// 유저 등록
userRouter.post('/', function(req, res) {

  const { account, password, nickname, email } = req.body;

  const respond = (result) => {
    const { _id, account, nickname } = result
    return res.json({
      success: true,
      _id, account, nickname
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
    });
  }

  createUser({ account, password, nickname, email })
    .then(respond)
    .catch(handdleError);
});

// 유저 수정
userRouter.put('/:id([0-9a-fA-F]{24})', function(req, res) {

  const { id } = req.params;
  const { user } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      user
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
    });
  }

  updateUser(id, user)
    .then(respond)
    .catch(handdleError);

});

// 패스워드 변경
userRouter.put('/password/:id([0-9a-fA-F]{24})', function(req, res) {

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
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
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
      return res.status(404).json({
        success: false,
        message: '해당하는 유저를 찾을 수 없습니다.'
      });
    return res.json(result);
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해보세요.'
    });
  }

  deleteUser(id)
    .then(respond)
    .catch(handdleError);

});
