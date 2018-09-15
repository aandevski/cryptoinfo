import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { Currencies } from './components/Currencies';
import { Currency } from './components/Currency';
import { Converter } from './components/Converter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/currencies' component={Currencies} />
            <Route path='/currencies/:id' component={Currency} />
            <Route path='/converter' component={Converter} />
          </Switch>
          </div>
      </div>
    );
  }
}

export default App;
