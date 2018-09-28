import express from 'express';
import { updateCategory, deleteCategory } from '../service/category'

export const categoryRouter  = express.Router();

categoryRouter .get('/', function(req, res) {
  res.json('Category Root');
});
