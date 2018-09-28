import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  content: String,
  createdBy: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  viewCount: { type: Number, default: 0 },
  comments: { type: [], default: []},
  isDeleted: { type: Boolean, default: false }
})

export const Post = mongoose.model('post', PostSchema);
