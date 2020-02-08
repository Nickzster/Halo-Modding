import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../Screens/NotFound";
//components
import LoadFeed from "./components/LoadFeed";
import LoadCreateNewPost from "./components/LoadCreateNewPost";
import Explore from "../Screens/Explore";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/feed" component={LoadFeed} />
        <Route exact path="/create-new-post" component={LoadCreateNewPost} />
        <Route exact path="/explore" component={Explore} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
