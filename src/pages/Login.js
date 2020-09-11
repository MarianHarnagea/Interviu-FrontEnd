import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLogedInUser, setIsAuthenticated }) => {
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/login", userValues)
      .then((res) => {
        setLogedInUser(res.data.user);
        setIsAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((err) => setErrors(err.response.data.error));
  };

  return (
    <form className="mt-5" onSubmit={handleLoginSubmit}>
      {errors ? (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      ) : null}

      <div className="form-group">
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="Email"
          aria-describedby="emailHelp"
          required
          onChange={(e) =>
            setUserValues({ ...userValues, email: e.target.value })
          }
          value={userValues.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          className="form-control"
          id="Password"
          required
          onChange={(e) =>
            setUserValues({ ...userValues, password: e.target.value })
          }
          value={userValues.password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
