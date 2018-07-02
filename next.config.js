// next.config.js
const path = require('path');
const withSass = require('@zeit/next-sass');
require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const { STATIC_PATH } = process.env;

module.exports = Object.assign(
  {},
  withSass(),
  {
    publicRuntimeConfig: {
      STATIC_PATH,
    },
  }
);
