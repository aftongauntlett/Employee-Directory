import React, { Component } from "react";
import "./styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Employee Directory</h1>
        <div>
          Click on the carats to filter by heading or uses the search box to
          narrow your results.
        </div>
      </div>
    );
  }
}
