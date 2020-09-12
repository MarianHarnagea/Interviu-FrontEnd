import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/actions/authActions";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logOut());
    history.push("/");
  };

  const styleLogout = {
    border: "none",
    backgroundColor: "transparent",
    paddingTop: "8px",
  };

  const logedIn = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>

      {user !== null ? (
        <Link className="nav-link" to="#">
          <li className="nav-item">Welcome {user} </li>
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
        <ul className="navbar-nav">{isAuthenticated ? logedIn : gwest}</ul>
        {isAuthenticated ? (
          <button
            style={styleLogout}
            className="ml-auto"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
