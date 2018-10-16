import express from 'express';
import cors from 'cors';

import { categoryRouter } from './category';
import { userRouter } from './user';
import { postRouter } from './post';
import { commentRouter } from './comment';
import { authRouter } from './auth'
import { utilRouter } from './util'

const router = express.Router();

router.get('/', function(req, res) {
  res.json('Hello World');
});

router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/auth', authRouter);
router.use('/util', utilRouter);


import { login } from '../services/auth'
import jwt from 'jsonwebtoken'
router.get('/login', (req, res) => {
  const userInfo = {
    account: 'sds901234',
    password: '1234'
  }
  login(userInfo).then( (result) => {
    console.log('Login Result : ', result)
    if(result != []){
      jwt.sign({ result})
    }
  }).catch( (err) => {
    console.log(err)
  })

  res.send('login')
})


export default router;
