import React from "react";

function Menu(props) {
  return (
    <>
      <div>Menu</div>

      <ul>
        <li>Entertainment</li>
        <li>Politics</li>
        <li>Tech</li>
      </ul>

      <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
      >
        Count is {props.count}
      </button>
    </>
  );
}

export default Menu;

import React, { Component } from "react";

export default class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>Menu</div>

        <ol>
          <li>Entertainment</li>
          <li>Politics</li>
          <li>Tech</li>
        </ol>

        <button
          className="counter"
          onClick={() => this.props.setCount(this.props.count + 1)}
        >
          Count is {this.props.count}
        </button>
      </>
    );
  }
}




