import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
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
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('props: ', this.props);
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getClassNames()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }

  getClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
