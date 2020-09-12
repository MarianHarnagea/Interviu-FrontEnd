import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/authActions";

const Register = () => {
  const registerFail = useSelector((state) => state.registerFail);

  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userValues));
    setUserValues({
      ...userValues,

      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className="mt-5 " onSubmit={handleRegisterSubmit}>
      {registerFail ? (
        <div
          className={registerFail ? "alert alert-danger" : null}
          role="alert"
        >
          {registerFail}
        </div>
      ) : null}

      <div className="form-group">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          aria-describedby="emailHelp"
          onChange={(e) =>
            setUserValues({ ...userValues, name: e.target.value })
          }
          value={userValues.name}
        />
      </div>
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
        <label htmlFor="Password1">Password</label>
        <input
          type="password"
          className="form-control"
          id="Password1"
          onChange={(e) =>
            setUserValues({ ...userValues, password: e.target.value })
          }
          value={userValues.password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Register;
