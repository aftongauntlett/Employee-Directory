import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeList />
    </div>
  );
}

export default App;
