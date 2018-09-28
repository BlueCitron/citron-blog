import express from 'express';
import cors from 'cors';


const router = express.Router();

router.get('/', function(req, res) {
  res.json('Hello World');
});

export default router;
