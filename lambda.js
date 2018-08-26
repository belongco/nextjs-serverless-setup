const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');

const binaryMimeTypes = [
  '*/*'
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
