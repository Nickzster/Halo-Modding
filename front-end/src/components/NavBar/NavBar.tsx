import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import "../../scss/components/navbar.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img id="logo" src={require("../../images/ForgeLogo.png")} />
      </Link>
      <img id="menu" src={require("../../images/menu-24px.svg")} />
    </nav>
  );
};

export default Navbar;
