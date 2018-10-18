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

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getAllUsers()
    .then(respond)
    .catch(handleError);

});

// 한명의 유저 정보
userRouter.get('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;

  const respond = (result) => {
    if(!result)
      return res.status(404).json({
        success: false,
        message: '해당 하는 유저를 찾을 수 없습니다.'
      });
    return res.json(result);
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getUserById(_id)
    .then(respond)
    .catch(handleError);

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

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  createUser({ account, password, nickname, email })
    .then(respond)
    .catch(handleError);
});

// 유저 수정
userRouter.put('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;
  const { nickname, email } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      nickname, email
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  updateUser(_id, { nickname, email })
    .then(respond)
    .catch(handleError);

});

// 패스워드 변경
userRouter.put('/password/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;
  const { password } = req.body;

  const respond = (result) => {
    return res.json({
      success: true,
      message: '패스워드가 변경 되었습니다.'
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  updatePassword(_id, password)
    .then(respond)
    .catch(handleError);

});


// 유저 삭제
userRouter.delete('/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params;

  const respond = (result) => {

    const { n, ok } = result

    if (n === 0) {
      return res.status(404).json({
        success: false,
        message: '유저를 찾을 수 없어요. 아이디를 확인해 주세요.'
      });
    }
    return res.json(result);
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  deleteUser(_id)
    .then(respond)
    .catch(handleError);

});
