import React from "react";
import { Link } from "../../../types/Post";

interface Props {
  Links: Array<Link>;
  HelperText: string;
}

const FeedLinks: React.FunctionComponent<Props> = props => {
  const { Links, HelperText } = props;
  if (Links.length === 0) return null;
  return (
    <section className="card-links-container">
      <p>{HelperText}</p>
      <section className="card-links">
        {Links.map(link => {
          if (link === null || link === undefined) return null;
          else
            return (
              <a
                key={link.url}
                className="p-2 hover:text-blue-500"
                target="_blank"
                href={link.url}
              >
                {link.source}
              </a>
            );
        })}
      </section>
    </section>
  );
};

export default FeedLinks;
