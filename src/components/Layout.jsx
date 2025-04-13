import { html } from 'hono/html'

const Layout = (props) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Clock</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preload" href="/static/fonts/Barlow-Regular.woff" as="font" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/static/styles/main.css" />
      <script>
        window.dataLayer = window.dataLayer || [];
      </script>
      <script>
        var country = 'IN';
      </script>
      <script src="/static/js/main.js" async defer></script>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`

export default Layout
