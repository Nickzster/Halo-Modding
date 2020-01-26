import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* component */
import Feed from '../screens/Feed';

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/feed' component={Feed} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
