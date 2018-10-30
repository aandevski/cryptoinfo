import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Homepage } from './components/pages/Homepage';
import { CurrenciesPage } from './components/pages/Currencies';
import { CurrencyPage } from './components/pages/Currency';
import { ConverterPage } from './components/pages/Converter';
import { NewsPage } from './components/pages/News';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="content">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/currencies' component={CurrenciesPage} />
              <Route path='/currencies/:id' component={CurrencyPage} />
              <Route path='/converter' component={ConverterPage} />
              <Route path='/news' component={NewsPage} />
            </Switch>
          </div>
          <div id="push"></div>  
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
