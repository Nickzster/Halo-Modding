import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Bottombar from "./components/Bottombar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Global from "./stores/Global";
// import "./styles/global.css";
// import "./styles/new.css";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

import Routes from "./Routes";
import LandingPage from "./Screens/LandingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Global.Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={Routes} />
          </Switch>
          <Bottombar />
        </Global.Container>
      </Router>
    </div>
  );
};

export default App;
