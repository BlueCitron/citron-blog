import { Post } from '../models/post';

export const getAllPostsOfCategory = async (category_id) => {
    return Post.findById(id);
};

export const createPost = async ({ title, content }) => {


    return Post.create({
        title,
        content,
    });
};

export const updatePost = async (id, post) => {
  
}

export const deletePost = async (id) => {
  return Post.deleteOne({ _id: id});
}

const validation = async () => {

}
