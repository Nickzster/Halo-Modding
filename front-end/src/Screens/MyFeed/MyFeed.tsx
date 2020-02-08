import React, { useState, useEffect } from "react";
import FeedCard from "../../components/MyFeed/FeedCard/FeedCard";
import { Link } from "react-router-dom";
import { Query } from "../../types/Query";
import { createQueryFromProps } from "../../utils/CreateQuery";
import SamplePosts from "../../SampleData/SamplePosts.json";
//rxjs
import { fromEvent } from "rxjs";
import Feed from "../../stores/Feed";
import { debounceTime } from "rxjs/operators";
import { Observable } from "rxjs";
import { match } from "react-router";
import "../../scss/screens/feed.scss";

const scroll: Observable<Event> = fromEvent(document, "scroll").pipe(
  debounceTime(200)
);

const needMoreData = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 1000
  )
    return true;
  return false;
};

interface Props {
  location: any;
  match: any;
}
//TODO: Refactor duplicate explore button

const MyFeed: React.FC<Props> = props => {
  const { location } = props;
  const store = Feed.useStore();
  const [scrollEventIsLoaded, loadScrollEvent] = useState(false);
  useEffect(() => {
    console.log(location);
    if (location && location.search && location.search !== "")
      store.set("queries")(location.search);
    if (store.get("posts").length === 0) store.set("loading")(true);
    if (!scrollEventIsLoaded) {
      var subscriber = scroll.subscribe(() => {
        if (needMoreData()) store.set("loading")(true);
      });
      console.log("Scroll Event is loaded!");
      loadScrollEvent(true);
    }
    return () => {
      subscriber.unsubscribe();
    };
  }, []);
  return (
    <div className="feed-container">
      <div className="card-container">
        {store.get("posts").map(post => {
          return <FeedCard key={post.projecttitle} Data={post} />;
        })}
      </div>
      {store.get("reachedBottom") ? (
        store.get("posts").length === 0 ? (
          <div style={{ height: "75vh", textAlign: "center" }}>
            <h1>No posts found with the given critera.</h1>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                padding: "1em",
                background: "#4981c2"
              }}
              to="/explore"
            >
              Go back to Explore
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <h2>Looks like you've reached the bottom!</h2>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                padding: "1em",
                background: "#4981c2"
              }}
              to="/explore"
            >
              Go back to Explore
            </Link>
          </React.Fragment>
        )
      ) : null}
    </div>
  );
};

export default MyFeed;
