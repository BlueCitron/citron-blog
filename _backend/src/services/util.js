import { Post } from '../models/post'
import { User } from '../models/user'

export const viewPost = async (_id) => {
    return Post.findOneAndUpdate({ _id }, { $inc: { viewCount: 1}})
};

export const isDuplicatedAccount = async (account) => {
    return User.findOne({ account })
};

export const isDuplicatedNickname = async (nickname) => {
    return User.findOne({ nickname })
};

export const isDuplicatedEmail = async (email) => {
    return User.findOne({ email })
};
