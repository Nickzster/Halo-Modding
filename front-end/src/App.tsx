import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes/Routes';
import LandingPage from './screens/LandingPage';

import './styles/global.css';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
