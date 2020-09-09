import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/register", userValues)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form className="mt-5 " onSubmit={handleRegisterSubmit}>
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
