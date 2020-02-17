import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.scss';
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Nav from './components/Nav';
import ProductsPage from './components/ProductsPage';


import Cart from "./components/shopify/Cart";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import store from "./store";

class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
    });
  }
  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'});
  }
  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'});
  }
  render() {
    const state = store.getState(); // state from redux store
    return (
      <div className="App">
        <Nav handleCartOpen={this.handleCartOpen}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This should be a super cool React and Shopify shop, but it's just a boilerplate from <a href="https://medium.com/siren-apparel-press/adding-shopifys-storefront-api-to-an-existing-react-app-with-react-redux-ea442bd7543" target="blank" rel="no ref no oper">this post Medium post</a>.
          </p>
        </header>
        <Cart
          checkout={state.checkout}
          isCartOpen={state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
         />
       <ProductsPage/>
      </div>
    );
  }
}

export default connect((state) => state)(App);