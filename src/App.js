import React, { Component } from 'react';
import './css/main.css';

import { Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Party from './pages/Party.js';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/party" component={Party} />
      </div>
    );
  }
}

export default App;
