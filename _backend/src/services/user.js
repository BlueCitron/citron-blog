import crypto from 'crypto'
import { User } from '../models/user';
const SECRET = 'YogertStrawberry'

export const getAllUsers = async () => {
  return User.find();
};

export const getUserById = async (_id) => {
  return User.find({ _id });
};

export const getUserByAccount = async (account) => {
  return User.find({ account });
};

export const createUser = async ({ acccountType, account, password, nickname, email }) => {
  return User.create({ acccountType, account, password, nickname, email });
};

export const updateUser = async (_id, { nickname, email }) => {
  return User.update({ _id }, { $set: { nickname, email }});
};

export const updatePassword = async (_id, password) => {
  const encryptedPassword = crypto.createHmac('sha256', SECRET).update(password).digest('base64')
  return User.update({ _id }, { $set: { password: encryptedPassword }})
}

export const deleteUser = async (_id) => {
  return User.update({ _id }, { $set: { isDeleted: true, deletedAt: Date() }});
};
