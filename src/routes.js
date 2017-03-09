import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import LocationsPage from './components/locations/LocationsPage';
import LocationPage from './components/locations/LocationPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/locations" component={LocationsPage}>
      <Route path="/locations/:id" component={LocationPage} />
    </Route> 
  </Route>
);