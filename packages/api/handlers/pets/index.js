const { db } = require('./db');

module.exports = (req, res) => {
  res.send({
    pets: db.pets,
  });
};
