import React from 'react';
import { Route, Switch } from 'react-router-dom';
//components

import MyFeed from '../Screens/MyFeed';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/feed' component={MyFeed} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
