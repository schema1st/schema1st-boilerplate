module.exports = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Schema1st</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700' rel='stylesheet'>
      <style>
      body {
        font-family: Roboto, sans-serif !important;
        font-size: 20px;
        line-height: 200%;
      }
      
      a {
        color: rgb(28,55,159);
        text-decoration: none;
      }
      </style>
    </head>
    <body>
    <ul>
      <li><a href="/docs">Redoc [/docs]</a></li>
      <li><a href="/docs/swagger">Swagger UI [/docs/swagger]</a></li>
    </ul>
    </body>
    </html>
  `);
};
