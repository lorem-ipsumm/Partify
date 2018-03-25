import React, { Component } from 'react';
import './css/main.css';

import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/Home.js';
import Party from './pages/Party.js';
import {Home} from 'react-feather';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/party" component={Party} />
        </Switch>
        <div className="buttons"><NavLink to="/"><Home/></NavLink></div>
      </div>
    );
  }
}

export default App;
