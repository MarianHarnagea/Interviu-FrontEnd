import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Navbar = ({ logedInUser }) => {
  // const history = useHistory();

  const logedIn = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>

      {logedInUser ? (
        <Link className="nav-link" to="#">
          <li className="nav-item">Welcome {logedInUser.Name} </li>
        </Link>
      ) : null}
    </>
  );

  const gwest = (
    <>
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">{logedInUser ? logedIn : gwest}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
