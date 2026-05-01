import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Animal', animalSchema);