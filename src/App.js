import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Homepage } from './components/pages/Homepage';
import { CurrenciesPage } from './components/pages/Currencies';
import { CurrencyPage } from './components/pages/Currency';
import { ConverterPage } from './components/pages/Converter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/currencies' component={CurrenciesPage} />
            <Route path='/currencies/:id' component={CurrencyPage} />
            <Route path='/converter' component={ConverterPage} />
          </Switch>
          </div>
      </div>
    );
  }
}

export default App;
