const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('DevOps lab 5: CI works\n');
}).listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});
