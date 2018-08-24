import React, { Component } from "react";

// Stateless Functional Component

const NavBar = props => {
  console.log("Navbar rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
