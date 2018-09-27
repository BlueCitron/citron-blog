import mongoose from 'mongoose';

const { Schema } = mongoose;

const SampleSchema = new Schema({
  title: String
})

export const Sample = mongoose.model('sample', SampleSchema);
