import React from 'react';
import Feed from '../../../Screens/MyFeed/MyFeed';
import '../../../styles/global.css';
import { Post } from '../../../types/Post';
import ImageCarousel from '../../Images/ImageCarousel/ImageCarousel';
import FeedLinks from './FeedLinks';
import ReleaseState from '../../ReleaseState';
import DisplayPartialProfile from '../../Profile/DisplayPartialProfile';
import Like from '../../util/Like';

interface Props {
  Data: Post;
}

const FeedCard: React.FunctionComponent<Props> = props => {
  const {
    userinfo,
    projecttitle,
    game,
    projecttype,
    projectmirrors,
    images,
    description,
    downloadmirrors
  } = props.Data;

  const { username } = userinfo;

  return (
    <div className='container mx-auto text-font-color md:max-w-md lg:max-w-lg xl:max-width-xl rounded overflow-hidden shadow-lg mb-16'>
      <DisplayPartialProfile username={projecttitle} isVerified={false} />
      <ImageCarousel images={images} />
      <div className='bg-primary-blue flex-col items-center flex-shrink-0 p-3'>
        <h3 className='font-black text-xl'>{`Created by ${username}`}</h3>
        <br />
        <p className='font-black text-xl'>
          <span className='p-2 bg-trim-blue rounded-lg'>{game}</span>
          {'  '}
          <span className='p-2 bg-trim-blue rounded-lg'>{projecttype}</span>
        </p>
        <br />
        <p>{description}</p>
      </div>
      <FeedLinks HelperText='Download at: ' Links={downloadmirrors} />
      <FeedLinks HelperText='More Info: ' Links={projectmirrors} />
    </div>
  );
};

export default FeedCard;
