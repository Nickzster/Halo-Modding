import React, { useState } from "react";
import { Link } from "react-router-dom";
import Global from "../../../stores/Global";
import { NavItem } from "./NavItem";
import "../../../scss/components/navbar.scss";

const Navbar: React.FunctionComponent = () => {
  const [sidePanel, toggleSidePanel] = useState(false);
  const [width, setWidth] = useState(0);
  const globalStore = Global.useStore(); //For auth when implemented
  const onClick = () => {
    toggleSidePanel(!sidePanel);
  };
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img id="logo" src={require("../../../images/ForgeLogo.png")} />
      </Link>
      <img
        onClick={() => {
          toggleSidePanel(!sidePanel);
        }}
        id="menu"
        src={require("../../../images/menu-24px.svg")}
      />
      {false ? null : (
        <div
          style={{ width: sidePanel === true ? "320px" : "0px" }}
          className="side-panel"
        >
          <NavItem
            isLink={false}
            url=""
            classes="list-item"
            icon="clear.svg"
            title="Close Menu"
            cb={onClick}
          />
          <NavItem
            isLink={true}
            url="/explore"
            classes="list-item"
            icon="explore.svg"
            title="Explore"
            cb={onClick}
          />
          <NavItem
            isLink={true}
            url="/create-new-post"
            classes="list-item"
            icon="upload.svg"
            title="Upload Project"
            cb={onClick}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
