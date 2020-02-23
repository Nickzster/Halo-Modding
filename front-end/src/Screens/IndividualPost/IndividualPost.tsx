import React, { useState, useEffect } from "react";
import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import { getDataFromAPI as fetchData } from "../../utils/GetData";
import NoPostsFound from "../../components/NoPostsFound";
import "../../scss/screens/feed.scss";

interface Props {
  match: any;
}

const IndividualPost: React.FC<Props> = props => {
  const { match } = props;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(new Array<Post>());
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchData(`/posts/id/${match.params.id}`)
      .then(json => json.json())
      .then(newData => {
        if (newData && newData.code) setError(true);
        else setPosts(posts.concat(newData));
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ height: "80vh" }} className="feed-container">
      <div className="card-container">
        {posts.map(post => {
          return <FeedCard key={post.projecttitle} Data={post} />;
        })}
      </div>
      {error ? (
        <NoPostsFound message={"Cannot find post by specified ID!"} />
      ) : null}
    </div>
  );
};

export default IndividualPost;
