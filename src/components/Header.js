import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Shop</li>
            <li>Contact</li>
            <li>Follow</li>
            <li>
              Cart
              <span>0</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
