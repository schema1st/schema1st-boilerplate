module.exports = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8' />
      <title>API Docs</title>
      <link rel='stylesheet' type='text/css' href='https://petstore.swagger.io/swagger-ui.css' />
      <link rel='stylesheet' type='text/css' href='https://petstore.swagger.io/index.css' />
    
      <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700' rel='stylesheet'>
    
      <style>
          body {
              font-family: Roboto, sans-serif !important;;
              line-height: 140%;
          }
    
          h1, h2, h3, h4, h5 {
              font-family: Montserrat, sans-serif !important;
              font-weight: 400 !important;
          }
    
          .topbar {
              display: none;
          }
      </style>
    </head>
    
    <body>
    <div id='swagger-ui'></div>
    <script src='https://petstore.swagger.io/swagger-ui-bundle.js'></script>
    <script src='https://petstore.swagger.io/swagger-ui-standalone-preset.js'></script>
    <script>
      window.onload = function() {
        const definitionURL = '/docs/schema';
    
        window.ui = SwaggerUIBundle({
          url: definitionURL,
          'dom_id': '#swagger-ui',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset,
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl,
          ],
          layout: 'StandaloneLayout',
          queryConfigEnabled: true,
          validatorUrl: 'https://validator.swagger.io/validator',
        });
      };
    </script>
    
    <script>
      // Small hack to select the server which corresponding to the current url
      const selectCurrentServerInterval = setInterval(() => {
        let servers = document.querySelectorAll('.scheme-container .servers select option');
    
        if (!servers) {
          return;
        }
    
        clearInterval(selectCurrentServerInterval);
    
        servers.forEach(optionNode => {
          let serverValue = optionNode.value;
          if (serverValue.startsWith('//')) {
            serverValue = \`http://\${serverValue}\`;
          }
    
          let docsHost = new URL(serverValue).hostname.replace('127.0.0.1', 'localhost');
          let clientHost = document.location.hostname.replace('127.0.0.1', 'localhost');
    
          if (docsHost === clientHost) {
            optionNode.selected = true;
            optionNode.parentNode.dispatchEvent(new Event('change', { 'bubbles': true }));
          }
        });
      }, 500);
    </script>
    
    </body>
    </html>
  `);
};
