import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1 className="text-4xl">404 Not Found</h1>
      <p className="text-2xl">
        Uh oh, we can't find that. Click{" "}
        <Link
          style={{ textDecorationLine: "underline", color: "white" }}
          to="/"
        >
          here
        </Link>{" "}
        to go back home
      </p>
    </div>
  );
};

export default NotFound;
