import { Comment } from '../models/comment';

export const getSCommentByPostId = async (postId) => {
    return Comment.find({ postId });
};

export const createComment = async ({ title, content }) => {
  // validation()

  return Comment.create();
};

export const updateComment = async () => {

};

export const deleteComment = async () => {

};

const validation = async () => {

}
