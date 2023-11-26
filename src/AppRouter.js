import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Queries from './Queries';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/queries" component={Queries} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
