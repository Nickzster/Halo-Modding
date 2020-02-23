import React from "react";
import { Route, Redirect } from "react-router-dom";
import Global from "../../stores/Global";

interface Props {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const store = Global.useStore();
  return (
    <Route
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
