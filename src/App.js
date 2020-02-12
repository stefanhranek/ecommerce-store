import React from 'react';
import { Switch } from 'react-router-dom';
import './App.scss';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Shop></Shop>
        <ProductDetails></ProductDetails>
        <Cart></Cart>
        <Contact></Contact>
      </Switch>
    </div>
  );
}

export default App;
