import React from "react";
import Verified from "../../Images/Verified";

interface Props {
  isVerified: boolean;
  AvatarURL?: string;
  username: string;
}

const DisplayPartialProfile: React.FC<Props> = props => {
  const { isVerified, username } = props;
  return (
    <section className="card-profile-header">
      {/* <img className='h-16 w-16 rounded-full mr-3' src={AvatarURL} /> */}
      <span className="font-semibold text-2xl align-middle tracking-tight">
        {username}
      </span>
      {isVerified == true ? <Verified /> : null}
    </section>
  );
};

export default DisplayPartialProfile;
