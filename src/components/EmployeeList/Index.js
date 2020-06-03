import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../EmployeeCard";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import _ from "lodash";
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
    let users = this.state.users;
    users = _.orderBy(users, this.state.sort, this.state.direction);
    return users.map((user) => {
      if (user.name.first.toLowerCase().includes(this.state.search)) {
        return <EmployeeCard user={user} />;
      }
    });
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  sortByName = () => {
    if (this.state.sort === "name.first" && this.state.direction === "asc") {
      this.setState({
        direction: "desc",
      });
    } else {
      this.setState({
        sort: "name.first",
        direction: "asc",
      });
    }
  };

  sortByPhone = () => {
    if (this.state.sort === "cell" && this.state.direction === "asc") {
      this.setState({
        direction: "desc",
      });
    } else {
      this.setState({
        sort: "cell",
        direction: "asc",
      });
    }
  };

  sortByEmail = () => {
    if (this.state.sort === "email" && this.state.direction === "asc") {
      this.setState({
        direction: "desc",
      });
    } else {
      this.setState({
        sort: "email",
        direction: "asc",
      });
    }
  };

  sortByAge = () => {
    if (this.state.sort === "dob.age" && this.state.direction === "asc") {
      this.setState({
        direction: "desc",
      });
    } else {
      this.setState({
        sort: "dob.age",
        direction: "asc",
      });
    }
  };

  render() {
    return (
      <div className="employeeTable">
        <input
          className="searchBar"
          value={this.state.search}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search First Name"
        />
        <Table responsive>
          <thead>
            <tr>
              <th className="tablePadding">
                <Button variant="dark">Photo</Button>
              </th>
              <th className="tablePadding">
                <Button variant="dark link" onClick={this.sortByName}>
                  Name
                </Button>
              </th>
              <th className="tablePadding">
                <Button variant="dark link" onClick={this.sortByPhone}>
                  Phone
                </Button>
              </th>
              <th className="tablePadding">
                <Button variant="dark link" onClick={this.sortByEmail}>
                  Email
                </Button>
              </th>
              <th className="tablePadding">
                <Button variant="dark link" onClick={this.sortByAge}>
                  Age
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>{this.listEmployees()}</tbody>
        </Table>
      </div>
    );
  }
}
