import React from "react";
import Feed from "../../../Screens/MyFeed/MyFeed";
import { Post } from "../../../types/Post";
import ImageCarousel from "../../Images/ImageCarousel/ImageCarousel";
import FeedLinks from "./FeedLinks";
import ReleaseState from "../../ReleaseState";
import DisplayPartialProfile from "../../Profile/DisplayPartialProfile";
import Like from "../../util/Like";

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
    downloadmirrors,
    _id
  } = props.Data;

  const { username } = userinfo;
  console.log(props.Data);
  return (
    <div className="card">
      <DisplayPartialProfile
        username={projecttitle}
        isVerified={false}
        id={_id}
      />
      <ImageCarousel images={images} />
      <section className="card-information">
        <h3>{`Created by ${username}`}</h3>
        <section className="card-bubble-container">
          <div className="card-bubble">{game}</div>
          <div className="card-bubble">{projecttype}</div>
        </section>
        <section className="card-description">
          <p>{description}</p>
        </section>
      </section>
      <FeedLinks HelperText="Downloads: " Links={downloadmirrors} />
      <FeedLinks HelperText="More Info: " Links={projectmirrors} />
    </div>
  );
};

export default FeedCard;
