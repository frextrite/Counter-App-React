import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./componenets/counters";
import NavBar from "./componenets/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 11 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App contructor');
  }

  componentDidMount() {
    // Calls
    console.log('App mounted');
  }

  handleDelete = counterId => {
    console.log("Delete event called!", counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    console.log("Reset even called!");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log('App rendered');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
