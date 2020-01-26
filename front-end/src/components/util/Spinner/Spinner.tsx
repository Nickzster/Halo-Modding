import React from "react";
import "./styles/spinner.css";

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
