import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLogedInUser }) => {
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/login", userValues)
      .then((res) => {
        if (res.data.user) {
          history.push("/dashboard");
          setLogedInUser(res.data.user);
          console.log(res.data.user);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="mt-5" onSubmit={handleLoginSubmit}>
      <div className="form-group">
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="Email"
          aria-describedby="emailHelp"
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
