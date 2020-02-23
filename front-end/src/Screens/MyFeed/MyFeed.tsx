import React, { useState, useEffect } from "react";
import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import { match } from "react-router";
import { Link } from "react-router-dom";
import NoPostsFound from "../../components/NoPostsFound";
import Feed from "../../stores/Feed";
import "../../scss/screens/feed.scss";
import LinkButton from "../../components/Inputs/LinkButton";

import { scroll, needMoreData } from "../../utils/FeedFetcher";

interface Props {
  location: any;
  match: any;
}

//TODO: Refactor duplicate explore button

const MyFeed: React.FC<Props> = props => {
  const { location } = props;
  const store = Feed.useStore();
  const setFetch = store.set("fetch");
  const setQuery = store.set("query");
  useEffect(() => {
    //Setup
    window.scrollTo(0, 0);
    console.log(location.search);
    if (location && location.search && location.search !== "")
      setQuery(location.search.slice(1, location.search.length));
    setFetch(true); //inital fetch
    var scrollSubscriber = scroll.subscribe(() => {
      if (needMoreData()) setFetch(true);
    });
    return () => {
      //Teardown
      scrollSubscriber.unsubscribe();
    };
  }, []);
  if (store.get("more") && store.get("posts").length === 0)
    return (
      <React.Fragment>
        <h1 style={{ marginTop: "20em", height: "100vh", textAlign: "center" }}>
          Loading...
        </h1>
      </React.Fragment>
    );
  return (
    <div className="feed-container">
      <div className="card-container">
        {store.get("posts").map(post => {
          return <FeedCard key={post.projecttitle} Data={post} />;
        })}
      </div>
      {!store.get("more") ? (
        store.get("posts").length === 0 ? (
          <NoPostsFound message="No posts found with the given criteria." />
        ) : (
          <React.Fragment>
            <h2>Looks like you've reached the bottom!</h2>
            <LinkButton url="/explore" title="Go back to Explore" />
          </React.Fragment>
        )
      ) : null}
    </div>
  );
};

export default MyFeed;
