import React, { Component } from "react";
import "./styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header container-fluid">
        <h1>Employee Directory</h1>
        <div>
          Click the buttons to filter by ascending and descending order or use
          the search box to narrow your results.
        </div>
      </div>
    );
  }
}
