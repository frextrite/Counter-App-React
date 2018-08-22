import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log(this);
  //   this.setState({ count: this.state.count + 1 });
  // };

  handleIncrement = () => {
    this.setState({ value: this.state.counter.value + 1 });
  };

  render() {
    console.log("props: ", this.props);
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getClassNames()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
