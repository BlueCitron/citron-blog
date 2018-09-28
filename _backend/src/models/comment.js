import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  content: String,
  createdBy: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isChild: { type: Boolean, default: false },
  parent: { type: Schema.Types.ObjectId, default: null }
})

export const Comment = mongoose.model('comment', CommentSchema);
