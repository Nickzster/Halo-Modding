import React, { useState, useEffect } from "react";
import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import { Link } from "react-router-dom";
import NoPostsFound from "../../components/NoPostsFound";
//rxjs
import { fromEvent } from "rxjs";
import Feed from "../../stores/Feed";
import { debounceTime } from "rxjs/operators";
import { Observable } from "rxjs";
import { match } from "react-router";
import "../../scss/screens/feed.scss";
import Button from "../../components/Inputs/Button";

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
    //set up queries
    if (location && location.search && location.search !== "")
      store.set("queries")(location.search);
    //inital fetch
    if (store.get("posts").length === 0) store.set("loading")(true);
    //subscribe to scroll event
    if (!scrollEventIsLoaded) {
      var subscriber = scroll.subscribe(() => {
        if (needMoreData()) store.set("loading")(true);
      });
      console.log("Scroll Event is loaded!");
      loadScrollEvent(true);
    }
    //unsubscribe from scroll event on cleanup
    return () => {
      subscriber.unsubscribe();
    };
  }, []);
  if (!store.get("reachedBottom") && store.get("posts").length === 0)
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
      {store.get("reachedBottom") ? (
        store.get("posts").length === 0 ? (
          <NoPostsFound message="No posts found with the given criteria." />
        ) : (
          <React.Fragment>
            <h2>Looks like you've reached the bottom!</h2>
            <Button url="/explore" title="Go back to Explore" />
          </React.Fragment>
        )
      ) : null}
    </div>
  );
};

export default MyFeed;
