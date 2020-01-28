import React, { useState, useEffect } from 'react';
import FeedCard from '../../components/MyFeed/FeedCard/FeedCard';
import SamplePosts from '../../SampleData/SamplePosts.json';
import '../../styles/global.css';
//rxjs
import { fromEvent } from 'rxjs';
import Feed from '../../stores/Feed';
import { debounceTime } from 'rxjs/operators';
import { match } from 'react-router';

const scroll = fromEvent(document, 'scroll');

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

const MyFeed: React.FC<Props> = props => {
  const { location } = props;
  const store = Feed.useStore();
  const [scrollEventIsLoaded, loadScrollEvent] = useState(false);
  useEffect(() => {
    console.log(location);
    if (location && location.search && location.search !== '')
      store.set('queries')(location.search);
    if (store.get('posts').length === 0) store.set('loading')(true);
    if (!scrollEventIsLoaded) {
      scroll.pipe(debounceTime(200)).subscribe(() => {
        if (needMoreData()) store.set('loading')(true);
      });
      console.log('Scroll Event is loaded!');
      loadScrollEvent(true);
    }
  }, [store.get('loading')]);
  return (
    <div className='container mx-auto'>
      {store.get('posts').map(post => {
        return <FeedCard key={post.projecttitle} Data={post} />;
      })}
      {store.get('reachedBottom') ? (
        <h1 className='text-font-color text-center mb-16'>
          Looks like you've reached the bottom!
        </h1>
      ) : null}
    </div>
  );
};

export default MyFeed;
