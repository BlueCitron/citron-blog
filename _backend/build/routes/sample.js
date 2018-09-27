import mongoose from 'mongoose';

const { Schema } = mongoose;

const sampleSchema = new Schema({
  title: String
})

export const Sample = mongoose.model('sample', sampleSchema);
