import React, { Component } from "react";
import "./styles.css";

export default class EmployeeCard extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            src={this.props.user.picture.thumbnail}
            alt="Employee Photo"
          ></img>
        </td>
        <td>{this.props.user.name.first + " " + this.props.user.name.last}</td>
        <td>{this.props.user.cell}</td>
        <td>
          <a href={"mailto:" + this.props.user.email}>
            {this.props.user.email}
          </a>
        </td>
        <td>{this.props.user.dob.age}</td>
      </tr>
    );
  }
}
