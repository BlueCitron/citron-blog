import mongoose from 'mongoose';

const { Schema } = mongoose;

const VisitSchema = new Schema({
  total: { type: Number, default: 0},
  visit: {
    type: Date,
    of: [Schema.Types.ObjectId]
  }
})

export const Visit = mongoose.model('visit', VisitSchema);
