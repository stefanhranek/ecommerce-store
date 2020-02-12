import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
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
    </div>
  );
}

export default App;
