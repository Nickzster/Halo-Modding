import React from "react";
import { Link } from "react-router-dom";

interface Props {
  isLink: boolean;
  url: string;
  classes: string;
  icon: string;
  title: string;
  cb: Function;
}

export const NavItem: React.FC<Props> = props => {
  const { url, classes, icon, title, cb, isLink } = props;
  const setItem = (icon: string, title: string) => (
    <React.Fragment>
      <img src={require(`../../../images/${icon}`)} />
      <p>{title}</p>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {isLink ? (
        <Link
          to={url}
          className={classes}
          onClick={() => {
            cb();
          }}
        >
          {setItem(icon, title)}
        </Link>
      ) : (
        <div
          className={classes}
          onClick={() => {
            cb();
          }}
        >
          {setItem(icon, title)}
        </div>
      )}
    </React.Fragment>
  );
};
