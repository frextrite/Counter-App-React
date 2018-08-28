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
    console.log("App contructor");
  }

  componentDidMount() {
    // Calls
    console.log("App mounted");
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

  handleAdd = () => {
    const counters = [...this.state.counters];
    let totalCounters = this.state.counters.length;
    console.log("LENGTH: ", totalCounters);
    let id;
    if (totalCounters == 0) {
      id = 0;
    } else {
      id = counters[totalCounters - 1].id + 1;
    }
    counters[totalCounters] = { id: id, value: 0 };
    console.log(this.state.counters);
    this.setState({ counters });
  };

  render() {
    console.log("App rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
