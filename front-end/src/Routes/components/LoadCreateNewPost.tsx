import React from 'react';
import NewPostStore from '../../stores/NewPostStore';
import NewPost from '../../Screens/NewPost';

interface Props {
  location: any;
  match: any;
}

const LoadFeed: React.FC<Props> = props => {
  const { match, location } = props;
  return (
    <React.Fragment>
      <NewPostStore.Container>
        <NewPost />
      </NewPostStore.Container>
    </React.Fragment>
  );
};

export default LoadFeed;
