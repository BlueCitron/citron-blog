import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'category' },
  title: String,
  content: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  viewCount: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false }
})

export const Post = mongoose.model('post', PostSchema);
