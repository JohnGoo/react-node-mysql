import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './pages/app';
import { store } from './redux/store/store';

import './style/common.css';
import './style/aside.less';

// import config from './config/config.js';

import(
	/* webpackChunkName: "config" */
  /* webpackMode: "lazy" */
	'./config/config'
	).then(_ => {
  // Do something with lodash (a.k.a '_')...
});

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
			<App />
  	</BrowserRouter>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);