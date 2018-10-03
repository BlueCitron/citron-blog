import { Post } from '../models/post';

export const getAllPostsOfCategory = async (category_id) => {
    return Post.find({ category: category_id, isDeleted: false}).populate('category', 'name').populate('createdBy', 'nickname');
};

export const getPostsOfCategoryWithPaging = async (category_id, page, perPage) => {
  let skip = (page - 1) * perPage;
  let limit = perPage/1;

  return Post.find({ category: category_id, isDeleted: false })
    .skip(skip).limit(limit)
    .populate('category', 'name').populate('createdBy', 'nickname')
}

export const createPost = async ({ category, title, content, createdBy }) => {
    console.log('category : ', category)
    console.log('title : ', title)
    console.log('content : ', content)
    console.log('createdBy : ', createdBy)
    return Post.create({
        category,
        title,
        content,
        createdBy
    });
};

export const updatePost = async (_id, { category, title, content }) => {
  return Post.update({ _id }, { $set: { category, title, content, updatedAt: Date() } });
}

export const deletePost = async (_id) => {
  return Post.update({ _id }, { $set: { isDeleted: true }});
}
