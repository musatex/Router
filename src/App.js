import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import History from './components/History';
import Error from './components/Error';
import Navigation  from './components/Navigation';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/nuestra-histoire" component={History}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
        );
  }
}

export default App;
