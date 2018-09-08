import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  address: String,
  website: String,
  phone: [Number],
  rate: Number,
  location: {
    type: { type: String },
    coordinates: [],
  },
  workTime: {
    monday: [String],
    tuesday: [String],
    wednesday: [String],
    thursday: [String],
    friday: [String],
    saturday: [String],
    sunday: [String],
  },
}, {
  versionKey: false,
})

schema.index({ location: '2dsphere' })

export default schema
