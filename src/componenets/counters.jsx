import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    console.log("Counters rendered");

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onAdd}
        >
          Add
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
