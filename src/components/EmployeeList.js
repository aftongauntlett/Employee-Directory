import React, { Component } from "react";
import axios from "axios";

export default class EmployeeList extends Component {
  state = {
    users: [],
  };

  // runs this function when employee list is mounted to the page
  componentDidMount() {
    axios("https://randomuser.me/api/?results=20").then((resp) => {
      this.setState({ users: resp.data.results });
      console.log(resp);
    });
  }

  render() {
    return <div>{JSON.stringify(this.state.users)}</div>;
  }
}
