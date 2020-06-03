import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../EmployeeCard";
import Table from "react-bootstrap/Table";
import "./styles.css";

export default class EmployeeList extends Component {
  state = {
    search: "",
    users: [],
  };

  // runs this function when employee list is mounted to the page
  componentDidMount() {
    axios("https://randomuser.me/api/?nat=us&results=20").then((resp) => {
      this.setState({ users: resp.data.results });
      console.log(resp);
    });
  }

  listEmployees() {
    // add sorting here
    return this.state.users.map((user) => {
      console.log(user);
      if (user.name.first.includes(this.state.search)) {
        return <EmployeeCard user={user} />;
      }
    });
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <div className="employeeTable">
        <input
          value={this.state.search}
          onChange={this.handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <Table responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{this.listEmployees()}</tbody>
        </Table>
      </div>
    );
  }
}
