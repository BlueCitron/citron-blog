import mongoose from 'mongoose'
import { Category } from '../models/category';
import { getUserById } from './user';

export const getAllCategories = async () => {
    return Category.find().populate('createdBy', 'nickname');
};

export const createCategory = async ({ name, createdBy }) => {

  const isExist = await Category.find({ name })

  if (isExist.length == 0){

    return Category.create({ name, createdBy });

  } else {
    const CategoryExistsError = new Error('카테고리가 존재합니다.');
    CategoryExistsError.status = 403;
    throw CategoryExistsError;
  }
};

export const updateCategory = async (_id, { name }) => {
  return Category.update({ _id }, { $set: { name }});
}

export const deleteCategory = async (_id) => {
  return Category.deleteOne({ _id });
}
