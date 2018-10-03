import { User } from '../models/user';

export const getAllUsers = async () => {
  return User.find();
};

export const getUserById = async (_id) => {
  return User.find({ _id });
};

export const createUser = async ({ acccountType, account, password, nickname, email }) => {
  return User.create({ acccountType, account, password, nickname, email });
};

export const updateUser = async (_id, { password, nickname, email }) => {  
  return User.update({ _id }, { $set: { password, nickname, email }});
};

export const deleteUser = async (_id) => {
  return User.update({ _id }, { $set: { isDeleted: true, deletedAt: Date() }});
};
