const path = require('path');

module.exports = (req, res) => {
  res.header('Content-Type', 'text/yaml');
  res.sendFile(path.join(__dirname, './../../openapi.yaml'));
};
