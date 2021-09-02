import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';
import { Cart } from './services/cart.mockup';

createServer({
  routes() {
    this.namespace = "api";

    this.get("/cart", () => {
      return Cart;
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);