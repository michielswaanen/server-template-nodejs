const credentials = require('dotenv');
credentials.config();

const http = require('http');
const app = require('./src/app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port);

console.log('Listing on port ', port);