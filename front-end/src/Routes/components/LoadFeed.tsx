import React from "react";
import Feed from "../../stores/Feed";
import MyFeed from "../../Screens/MyFeed";

interface Props {
  location: any;
  match: any;
  queries: string;
}

const LoadFeed: React.FC<Props> = props => {
  const { match, location, queries } = props;
  return (
    <React.Fragment>
      <Feed.Container>
        <MyFeed match={match} location={location} />
      </Feed.Container>
    </React.Fragment>
  );
};

export default LoadFeed;
