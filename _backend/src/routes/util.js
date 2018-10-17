import express from 'express';
import { viewPost, isDuplicatedAccount, isDuplicatedNickname, isDuplicatedEmail } from '../services/util';

export const utilRouter = express.Router();

const handdleError = (error) => {
  console.log(error);
  return res.status(500).json({
    success: false,
    message: '서비스에 문제가 생겼습니다. 잠시 후에 다시 시도해주세요.'
  });
}

utilRouter.get('/postview/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params

  const respond = (result) => {
    return res.json({
      success: true
    })
  }

  viewPost(_id)
    .then(respond)
    .catch(handdleError)
});

utilRouter.get('/duplicate', function(req, res) {

  const { account, nickname, email } = req.query

  const respond = (result) => {

    if (!result) {
      return res.json({
        success: true,
        message: 'Not Duplicated.'
      })
    }
    return res.json({
      success: false,
      message: '중복된 결과입니다.'
    })
  }

  if (account !== undefined) {
    isDuplicatedAccount(account)
      .then(respond)
      .catch(handdleError)
  } else if (nickname !== undefined) {
    isDuplicatedNickname(nickname)
    .then(respond)
    .catch(handdleError)
  } else if (email !== undefined) {
    isDuplicatedEmail(email)
    .then(respond)
    .catch(handdleError)
  }

})
