import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style/common.css';
import './style/aside.less';

// import config from './config/config.js';

import(
	/* webpackChunkName: "config" */
  /* webpackMode: "lazy" */
	'./config/config.js'
	).then(_ => {
  // Do something with lodash (a.k.a '_')...
});

ReactDOM.render(
  <Provider>
  	
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);