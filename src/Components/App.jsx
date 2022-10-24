import React from "react";
import Login from "./Login";
var isLoggedIN = false;

function App() {
  return (
    <div className="container">
      {isLoggedIN === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
