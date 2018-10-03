import express from 'express';
import cors from 'cors';

import { categoryRouter } from './category';
import { userRouter } from './user';
import { postRouter } from './post';
import { commentRouter } from './comment';

const router = express.Router();

router.get('/', function(req, res) {
  res.json('Hello World');
});

router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);

export default router;
