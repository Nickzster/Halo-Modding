import React from 'react';
import '../../styles/global.css';
import { PostCard } from '../../components/ViewProfile/ViewProfileCard/PostCard';
import SampleProfile from '../../SampleData/SampleProfile.json';
import DisplayPartialProfile from '../../components/util/DisplayPartialProfile';

const ViewProfile: React.FC = () => {
  const { Profile, Posts } = SampleProfile;
  const { username, AvatarURL, Socials, isVerified } = Profile;
  return (
    <React.Fragment>
      <div className='container mx-auto text-font-color'>
        <DisplayPartialProfile
          AvatarURL={AvatarURL}
          username={username}
          isVerified={isVerified}
        />
      </div>
      <div className='container mx-auto flex flex-wrap'>
        {Posts.map(post => {
          return <PostCard Image={post.Image} URL={post.URL} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default ViewProfile;
