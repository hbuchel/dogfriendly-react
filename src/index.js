/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.scss';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);