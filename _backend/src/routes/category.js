import express from 'express';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../services/category'

export const categoryRouter  = express.Router();

categoryRouter.get('/', (req, res) => {

  const respond = (result) => {

    return res.json(result);

  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  getAllCategories()
    .then(respond)
    .catch(handleError);

});

categoryRouter.post('/', (req, res) => {

  const { name, createdBy } = req.body;

  if (!name || !createdBy) {

    return res.status(409).json({
      success: false,
      message: '필수 입력 항목을 모두 입력해주세요.'
    });

  }

  const respond = (result) => {

    return res.json({
      success: true,
      name, createdBy
    });

  }

  const handleError = (error) => {

    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  createCategory({ name, createdBy })
    .then(respond)
    .catch(handleError);

});

categoryRouter.put('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;
  const { name } = req.body;

  const respond = (result) => {

    return res.json({
      success: true,
      name
    });

  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  updateCategory(_id, { name })
    .then(respond)
    .catch(handleError);

});

categoryRouter.delete('/:_id([0-9a-fA-F]{24})', (req, res) => {

  const { _id } = req.params;

  const respond = (result) => {

    const { n, ok } = result

    if (n === 0) {
      res.status(404).json({
        success: false,
        message: '카테고리를 찾을 수 없어요. 아이디를 확인해 주세요.'
      });
    }
    return res.json({
      success: true,
      _id
    });
  }

  const handleError = (error) => {

    console.log(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });

  }

  deleteCategory(_id)
    .then(respond)
    .catch(handleError);

});
