import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: String,
  createdBy: Schema.Types.ObjectId,
  createdBy: { type: Schema.Types.ObjectId, ref: 'user'},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export const Category = mongoose.model('category', CategorySchema);
