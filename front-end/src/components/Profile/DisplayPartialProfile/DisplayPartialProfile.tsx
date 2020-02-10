import React from "react";
import Verified from "../../Images/Verified";
import { copyURL } from "../../../utils/url";

interface Props {
  isVerified: boolean;
  AvatarURL?: string;
  username: string;
  id?: string;
}

const DisplayPartialProfile: React.FC<Props> = props => {
  const { isVerified, username, id } = props;
  return (
    <section className="card-profile-header">
      {/* <img className='h-16 w-16 rounded-full mr-3' src={AvatarURL} /> */}
      <span>{username}</span>
      {!!id ? (
        <img
          onClick={() => {
            console.log("Clicked!");
            navigator.clipboard.writeText(`${copyURL}/id/${id}`);
          }}
          src={require("../../../images/link.svg")}
        />
      ) : null}

      {/* {isVerified == true ? <Verified /> : null} */}
    </section>
  );
};

export default DisplayPartialProfile;
