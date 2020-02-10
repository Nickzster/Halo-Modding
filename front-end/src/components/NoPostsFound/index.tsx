import React from "react";
import { Link } from "react-router-dom";

interface Props {
  message: string;
}

const NoPostsFound: React.FC<Props> = props => {
  return (
    <div style={{ height: "75vh", textAlign: "center" }}>
      <h1>{props.message}</h1>
      <Link
        style={{
          color: "white",
          textDecoration: "none",
          padding: "1em",
          background: "#4981c2"
        }}
        to="/explore"
      >
        Go back to Explore
      </Link>
    </div>
  );
};

export default NoPostsFound;
