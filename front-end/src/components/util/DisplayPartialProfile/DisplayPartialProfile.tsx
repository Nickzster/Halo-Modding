import React from 'react';
import Verified from '../Images/Verified';

interface Props {
  isVerified: boolean;
  AvatarURL?: string;
  username: string;
}

const DisplayPartialProfile: React.FC<Props> = props => {
  const { isVerified, username } = props;
  return (
    <div className='bg-primary-blue flex items-center flex-shrink-0 p-3'>
      {/* <img className='h-16 w-16 rounded-full mr-3' src={AvatarURL} /> */}
      <span className='font-semibold text-xl align-middle tracking-tight'>
        {username}
      </span>
      {isVerified == true ? <Verified /> : null}
    </div>
  );
};

export default DisplayPartialProfile;
