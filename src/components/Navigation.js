import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home </Link>
      <Link to="/about">About</Link>
    </div>
  );
}
// if you use a Link in Navigation.js, Navigation has to be inside of Router
export default Navigation;
