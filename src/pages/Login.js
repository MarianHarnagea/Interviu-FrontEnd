import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/authActions";

const Login = () => {
  const errors = useSelector((state) => state.loginFail);

  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userValues));
  };

  return (
    <>
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
    </>
  );
};

export default Login;
