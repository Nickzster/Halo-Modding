import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  url: string;
}

const Button: React.FC<Props> = props => {
  const { title, url } = props;
  return (
    <React.Fragment>
      <Link
        style={{
          color: "white",
          textDecoration: "none",
          padding: "1em",
          background: "#4981c2"
        }}
        to={url}
      >
        {title}
      </Link>
    </React.Fragment>
  );
};

export default Button;
