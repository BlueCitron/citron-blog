import { Comment } from '../models/comment';

export const getAllComments = async () => {
    return Comment.find({ isDeleted: false });
};

export const getCommentByPostId = async (postId) => {
    return Comment.find({ postId, isDeleted: false });
};

export const createComment = async ({ postId, content, createdBy, isChild, parent }) => {
  return Comment.create({ postId, content, createdBy, isChild, parent });
};

export const updateComment = async (_id, { content }) => {
  return Comment.update({ _id }, { $set: { content, updatedAt: Date() }});
};

export const deleteComment = async (_id) => {
  return Comment.update({ _id }, { $set: { isDeleted: true }});
};
