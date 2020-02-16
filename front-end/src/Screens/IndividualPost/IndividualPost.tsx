import React, { useState, useEffect } from "react";
import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
import Feed from "../../stores/Feed";
import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import { getDataFromAPI as fetchData } from "../../utils/GetData";
import NoPostsFound from "../../components/NoPostsFound";
import "../../scss/screens/feed.scss";

interface Props {
  match: any;
}

const IndividualPost: React.FC<Props> = props => {
  const { match } = props;
  const store = Feed.useStore();
  useEffect(() => {
    fetchData(`/posts/id/${match.params.id}`)
      .then(json => json.json())
      .then(data => {
        if (data && data.code) {
          store.set("error")(true);
          store.set("posts")([]);
        } else store.set("posts")([data]);
      });
  }, []);
  return (
    <div style={{ height: "80vh" }} className="feed-container">
      <div className="card-container">
        {store.get("posts").map(post => {
          return <FeedCard key={post.projecttitle} Data={post} />;
        })}
      </div>
      {store.get("error") === true ? (
        <NoPostsFound message={"Cannot find post by specified ID!"} />
      ) : null}
    </div>
  );
};

export default IndividualPost;
