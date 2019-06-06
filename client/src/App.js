import React, { Component } from 'react';

import Header from './components/layout/Header';
import Alerts from './components/layout/Alerts';
import SearchFood from './components/food/SearchFood';
import Foods from './components/food/Foods';
import AddFood from './components/food/AddFood';
import { Provider } from './context';
// import Food from './components/food/Food';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Header branding='Calorica IO' text='Ce mai mancam azi?' />
          <div className='container'>
            <SearchFood />
            <Foods />
            <Alerts />
            <AddFood />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
