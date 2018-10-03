import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true, ref: 'post' },
  content: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isChild: { type: Boolean, default: false },
  parent: { type: Schema.Types.ObjectId, default: null, ref: 'comment' },
  isDeleted: { type: Boolean, default: false }
})

export const Comment = mongoose.model('comment', CommentSchema);
