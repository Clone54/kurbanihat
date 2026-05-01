import express from 'express';
import Animal from '../models/Animal.js';

const router = express.Router();

// Get all animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create animal
router.post('/', async (req, res) => {
  const animal = new Animal(req.body);
  try {
    const savedAnimal = await animal.save();
    res.json(savedAnimal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;