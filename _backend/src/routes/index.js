import express from 'express';
import cors from 'cors';

import { categoryRouter } from './category';

const router = express.Router();

router.get('/', function(req, res) {
  res.json('Hello World');
});

router.use('/category', categoryRouter);

export default router;
