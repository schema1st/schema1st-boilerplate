const { db } = require('./db');

module.exports = (req, res) => {
  const pet = db.pets.find((pet) => pet.id === Number(req.params.id));

  if (!pet) {
    throw new Error('Pet not found');
  }

  res.send(pet);
};
