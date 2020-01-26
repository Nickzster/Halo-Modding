import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.css';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import Routes from './Routes';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
