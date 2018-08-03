import React from 'react';
import '../static/scss/main.scss';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { STATIC_PATH } = publicRuntimeConfig;

export default () => (
  <div className="index">
    <img src={`${STATIC_PATH}/static/images/bg.jpeg`} alt="Background" className="index__img"/>
    <h1>next.js | express | serverless</h1>
    <ul>
      <li>
        <a target="_blank" href="/api/mock-dog-create">Create Dogs</a>
      </li>
      <li>
        <a target="_blank" href="/api/dog/terrier">Get terrier</a>
      </li>
    </ul>
  </div>
);
