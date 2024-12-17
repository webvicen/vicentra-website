import { createServer } from 'http';
import { renderToString } from 'react-dom/server';
import createInertiaApp from '@inertiajs/server';

createServer((req, res) => {
  createInertiaApp({
    page: JSON.parse(req.body), // Pastikan ini sesuai dengan data yang dikirim
    render: renderToString,
    resolve: name => require(`./Pages/${name}`), // Atur path komponen halaman
    setup: ({ App, props }) => <App {...props} />,
  }).then(html => {
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
}).listen(8000, () => {
  console.log('Server is running on http://127.0.0.1:8000');
});
