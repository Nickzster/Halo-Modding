import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/components/buttons.scss";

interface Props {
  title: string;
  url: string;
}

const LinkButton: React.FC<Props> = props => {
  const { title, url } = props;
  return (
    <React.Fragment>
      <Link to={url} className="button link-button">
        {title}
      </Link>
    </React.Fragment>
  );
};

export default LinkButton;
