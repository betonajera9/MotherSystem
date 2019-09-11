import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home.jsx';
import Payments from './pages/payments.jsx';
import Books from './pages/books.jsx';

class Motherapp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/payments' component={Payments}/>
          <Route path='/books' component={Books}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<Motherapp/>, document.getElementById('root'));
