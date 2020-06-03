import React, { Component } from "react";
import "./styles.css";

export default class EmployeeCard extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.user.picture.large} alt="Employee Photo"></img>
        </td>
        <td className="employeeInfo">
          {this.props.user.name.first + " " + this.props.user.name.last}
        </td>
        <td className="employeeInfo">{this.props.user.cell}</td>
        <td className="employeeInfo">
          <a href={"mailto:" + this.props.user.email}>
            {this.props.user.email}
          </a>
        </td>
        <td className="employeeInfo">{this.props.user.dob.age}</td>
      </tr>
    );
  }
}
