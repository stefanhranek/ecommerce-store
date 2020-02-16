import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';

import Cart from './components/shopify/Cart';
import { render } from '@testing-library/react';
 
class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
  }
  render() {  
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Shop}></Route>
            <Route exact path="/details" component={ProductDetails}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </BrowserRouter>
        <Cart/>
      </div>
    );
  }
}

export default App;


