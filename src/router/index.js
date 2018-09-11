import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import stores from '../store';
import { Provider } from 'mobx-react';
import Home from '../pages/home';
import Detail from '../pages/detail';

class App extends Component {
  render() {

    const {...storesArray} = stores;
    return (
      <Provider {...storesArray}>
        <BrowserRouter>
          <div>
            <Route path="/" exact component ={Home}></Route>
            <Route path="/detail" exact component ={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;