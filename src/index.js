import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Client from "shopify-buy";
import { Provider } from "react-redux";
import store from "./store";

const client = Client.buildClient({
  storefrontAccessToken: "your-access-token",
  domain: "your-shopify-url.myshopify.com"
});

ReactDOM.render(
  <Provider store={store}>
    <App locale={locale} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
