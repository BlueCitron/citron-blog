import mongoose from 'mongoose'
import { Category } from '../models/category';
import { getUserById } from './user';

export const getAllCategories = async () => {
    return Category.find().populate('createdBy', 'nickname');
};

export const getCategoryById = async (id) => {
  return Category.find({ _id: id }).populate('createdBy', 'nickname');
}

export const createCategory = async ({ name, createdBy }) => {

  const isExist = await Category.find({ name })

  if(isExist.length == 0)
    return Category.create({
      name,
      createdBy
    });
  else {
    console.log('Validation Fail..')
    throw 'Validation Fail..';
  }
};

export const updateCategory = async (id, { name }) => {
  return Category.update({ _id: id }, { $set: { name }});
}

export const deleteCategory = async (id) => {
  return Category.deleteOne({ _id: id});
}
