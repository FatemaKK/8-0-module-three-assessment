import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Nav.css"

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
        <img
            className="nav-logo"
            src="https://media.wired.com/photos/5b7350e75fc74d47846ce4e4/master/pass/Popcorn-869302844.jpg"
            alt="Nav Logo"
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </div>
    );
  }
}

export default Nav;