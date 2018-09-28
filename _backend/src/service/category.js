import { Category } from '../models/category';

export const getAllCategories = async () => {
    return Category.find();
};

export const getCategoryByName = async (name) => {
  return Category.find({ name });
}

export const createCategory = async ({ name, createdBy }) => {

  const result = await validation(name, createdBy);

  if(!result)
    return Category.create({
      name,
      craetedBy
    })
};

const validation = async (name, createdBy) => {
  return Promise.all([
    getCategoryByName(name),
    // ...
    // ...
  ]);
}
