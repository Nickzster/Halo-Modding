import React from "react";
import Feed from "../../stores/Feed";
import IndividualPost from "../../Screens/IndividualPost";

interface Props {
  location: any;
  match: any;
  queries: string;
}

const LoadIndividualPost: React.FC<Props> = props => {
  const { match, location, queries } = props;
  return (
    <React.Fragment>
      <Feed.Container>
        <IndividualPost match={match} />
      </Feed.Container>
    </React.Fragment>
  );
};

export default LoadIndividualPost;
