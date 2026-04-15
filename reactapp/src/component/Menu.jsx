import React, { Component } from "react";

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count === 1) {
      return false;
    }

    console.log("should component update");
    return true;
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Menu</h1>

        <ul>
          <li>Entertainment</li>
          <li>Politics</li>
          <li>Tech</li>
        </ul>

        <h2>{this.state.count}</h2>

        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "100px",
            height: "30px"
          }}
          onClick={this.handleIncrement}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Menu;