import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import NotFound from './containers/not-found/NotFound';
import Login from './containers/login/Login'
import AppliedRoute from './components/applied-route/AppliedRoute'

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /*Catch all unmatched routes*/ }
    <Route compontent={NotFound} />
  </Switch>
