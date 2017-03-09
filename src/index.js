/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import {loadLocations} from './actions/locationActions';
import {loadTags} from './actions/tagActions';

require('./favicon.ico');
import './styles/styles.scss';


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(loadLocations());
store.dispatch(loadTags());

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);