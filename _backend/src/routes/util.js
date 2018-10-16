import express from 'express';
import { viewPost } from '../services/util';

export const utilRouter = express.Router();


utilRouter.get('/postview/:_id([0-9a-fA-F]{24})', function(req, res) {

  const { _id } = req.params

  const respond = (result) => {
    return res.json({
      success: true
    });
  }

  const handdleError = (error) => {
    console.log(error);
    return res.status(500).json('failure..');
  }

  viewPost(_id)
    .then(respond)
    .catch(handdleError);
});
