import React, { Component } from 'react';
import './css/main.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Party from './pages/Party.js';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/party" component={Party} />
        </Switch>
      </div>
    );
  }
}

export default App;
