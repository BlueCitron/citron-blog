import { User } from '../models/user';

export const getUserByAccount = async () => {

};

export const getUserById = async (id) => {
  return User.find({ _id: id});
};

export const createUser = async () => {

};

export const updateUser = async () => {

};

export const deleteUser = async () => {

};
