import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadUser, ensureAuth } from "./store/actions/authActions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadUser());
    if (state.token && state.user !== null) {
      dispatch(ensureAuth());
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [dispatch, state.token, state.user, history]);

  return (
    <>
      <Navbar />
      <div className="App ">
        <Switch>
          <Route exact path="/" component={() => <Login />} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={() => <Dashboard />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
