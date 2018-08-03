const express = require('express');
const next = require('next');
const path = require('path');
const dynamoose = require('dynamoose');
require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const Dog = require('./models/Dog');

/*
  The accessKeyId & secretAccessKey can be made avaialble via the IAMRole
*/
dynamoose.AWS.config.update({
  region: process.env.AWS_REGION,
});

if (process.env.NODE_ENV === 'development') {
  /*
    For development environment, atleast with dynamoose library,
    you need to pass mock access key & secret.
  */
  dynamoose.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
    region: process.env.AWS_REGION,
  });
  dynamoose.local('http://localhost:8000');
}

function createServer() {
  const server = express();

  server.get('/api/dog/', async (req, res) => {
    const { breed } = req.params;
    const dogData = await Dog.query('breed').eq(breed).exec();

    res.send(dogData);
  });

  server.post('/api/dog/', async (req, res) => {
    const { breed, name } = req.body;

    const payload = {
      breed,
      name,
    };

    try {
      const dog = new Dog(payload);
      const dogData = await dog.save();

      res.send({ s: 'success', m: 'Dog created successfully', d: dogData });
    } catch (e) {
      res.status(400).send({
        m: e.message,
        s: 'error',
        d: {
          payload,
        },
      });
    }
  });

  server.get('*', (req, res) => (handle(req, res)));

  return server;
}

if (dev) {
  app.prepare().then(() => {
    const server = createServer();

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
} else {
  const server = createServer();

  module.exports = server;
}
