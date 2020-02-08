import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import "../../scss/components/navbar.scss";

const Navbar: React.FunctionComponent = () => {
  const [sidePanel, toggleSidePanel] = useState(false);
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img id="logo" src={require("../../images/ForgeLogo.png")} />
      </Link>
      <img
        onClick={() => {
          toggleSidePanel(!sidePanel);
        }}
        id="menu"
        src={require("../../images/menu-24px.svg")}
      />
      {!sidePanel ? null : (
        <div className="side-panel">
          <div
            className="list-item"
            onClick={() => {
              toggleSidePanel(!sidePanel);
            }}
          >
            <img src={require("../../images/clear.svg")} />
            <p>Close Menu</p>
          </div>
          <Link
            to="/explore"
            className="list-item"
            onClick={() => {
              toggleSidePanel(!sidePanel);
            }}
          >
            <img src={require("../../images/explore.svg")} />
            <p>Explore</p>
          </Link>
          <Link
            to="/create-new-post"
            className="list-item"
            onClick={() => {
              toggleSidePanel(!sidePanel);
            }}
          >
            <img src={require("../../images/upload.svg")} />
            <p>Upload Project</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
