import React from 'react';
import FeedCard from '../../components/MyFeed/FeedCard/FeedCard';
import SamplePosts from '../../SampleData/SamplePosts.json';
import '../../styles/global.css';

const MyFeed: React.FC = () => {
  const { Posts } = SamplePosts;
  return (
    <div className='container mx-auto'>
      {Posts.map(post => {
        return <FeedCard Data={post} />;
      })}
    </div>
  );
};

export default MyFeed;
