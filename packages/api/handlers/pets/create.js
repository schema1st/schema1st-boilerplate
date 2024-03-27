const { db } = require('./db');

module.exports = (req, res) => {
  const pet = {
    id: db.pets.length + 1,
    name: req.body.name,
    type: req.body.type,
  };

  console.log('pet', pet);
  db.pets.push(pet);

  res.send(pet);
};
