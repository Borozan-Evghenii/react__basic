import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
