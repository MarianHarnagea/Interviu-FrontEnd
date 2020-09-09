import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [logedInUser, setLogedInUser] = useState();

  return (
    <Router>
      <Navbar logedInUser={logedInUser} />
      <div className="App ">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Login setLogedInUser={setLogedInUser} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
