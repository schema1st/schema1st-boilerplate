const express = require('express');
const app = express();
const OpenApiValidator = require('express-openapi-validator');

app.use(express.json());

// This is the middleware that validates the request and response against the OpenAPI schema
app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateResponses: {
      removeAdditional: 'all',
    },
    validateRequests: {
      allowUnknownQueryParameters: true,
      removeAdditional: 'all',
    },
    ajvFormats: {
      mode: 'full',
    },
  }),
);

// Handlers
app.get('/', require('./handlers/home'));

app.get('/ping', require('./handlers/ping'));

app.get('/docs', require('./handlers/docs'));
app.get('/docs/swagger', require('./handlers/docs/swagger'));
app.get('/docs/schema', require('./handlers/docs/schema'));

app.get('/pets', require('./handlers/pets/index'));
app.post('/pets', require('./handlers/pets/create'));
app.get('/pets/:id', require('./handlers/pets/get'));

// Error handler middleware
app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(err?.status || 500).send({
      message: err.message,
      errors: (err.errors ? err.errors : []),
    });
  }
  next();
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});

module.exports = app;
