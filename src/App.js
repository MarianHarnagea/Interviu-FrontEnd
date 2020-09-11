import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { useHistory } from "react-router-dom";

function App() {
  const [logedInUser, setLogedInUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated !== true) {
      history.push("/");
    }
  });
  return (
    <>
      <Navbar logedInUser={logedInUser} />
      <div className="App ">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Login
                setLogedInUser={setLogedInUser}
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            )}
          />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={() => <Dashboard />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
