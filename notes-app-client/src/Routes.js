import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import NotFound from './containers/404/NotFound';

export default () =>
  <Switch>
    <Route path='/' exact component={Home} />
    {/*<Route path='/other' exact component={NotFound} />*/}
    { /*Catch all unmatched routes*/ }
    <Route path='*' exact compontent={NotFound} />
  </Switch>
