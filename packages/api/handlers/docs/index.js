module.exports = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Docs</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700' rel='stylesheet'>
      <style>
          body {
              margin: 0;
              padding: 0;
          }
      </style>
    </head>
    <body>
    <redoc spec-url='/docs/schema'></redoc>
    <script src='https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js'></script>
    </body>
    </html>
  `);
};
