import React, { useState } from "react";
import { Link } from "react-router-dom";
import Global from "../../stores/Global";
import { NavItem } from "./NavItem";
import "../../scss/components/navbar.scss";

const Navbar: React.FunctionComponent = () => {
  const [sidePanel, toggleSidePanel] = useState(false);
  const globalStore = Global.useStore();
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
          <div
            className="list-item"
            onClick={() => {
              toggleSidePanel(!sidePanel);
            }}
          >
            <img src={require("../../images/account.svg")} />
            <p>{globalStore.get("user")}</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
