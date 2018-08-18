import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 11 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log('Delete event called!', counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} >
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
