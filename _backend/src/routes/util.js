import express from 'express';
import { viewPost, isDuplicatedAccount, isDuplicatedNickname, isDuplicatedEmail } from '../services/util';

export const utilRouter = express.Router();

utilRouter.get('/postview/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params

  const respond = (result) => {
    return res.json({
      success: true
    })
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  viewPost(_id)
    .then(respond)
    .catch(handleError)
});

utilRouter.get('/duplicate', function(req, res) {

  const { account, nickname, email } = req.query

  const respond = (result) => {

    if (!result) {
      return res.json({
        success: true,
        message: '사용할 수 있습니다.'
      })
    }
    return res.json({
      success: false,
      message: '중복된 결과입니다.'
    })
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  if (account !== undefined) {
    isDuplicatedAccount(account)
      .then(respond)
      .catch(handleError)
  } else if (nickname !== undefined) {
    isDuplicatedNickname(nickname)
    .then(respond)
    .catch(handleError)
  } else if (email !== undefined) {
    isDuplicatedEmail(email)
    .then(respond)
    .catch(handleError)
  }

})
