import { Post } from '../models/post';

export const viewPost = async (_id) => {
    return Post.findOneAndUpdate({ _id }, { $inc: { viewCount: 1}})
};
