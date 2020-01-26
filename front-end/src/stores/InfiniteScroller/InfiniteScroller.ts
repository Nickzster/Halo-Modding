import { Effects, createConnectedStore } from 'undux';
import { Post, PostQuery } from '../../types/Post';
import { getPosts } from '../../controllers/Posts';

interface State {
  loading: boolean;
  page: number;
  data: Array<Post>;
  queryParams: Array<PostQuery>;
  reachedBottom: boolean;
}

const initalState: State = {
  loading: false,
  data: [],
  queryParams: [],
  reachedBottom: false,
  page: 0
};

let effects: StoreEffects = store => {
  store.on('loading').subscribe(() => {
    // if (store.get('loading') && !store.get('reachedBottom')) {
    //   let posts = await getPosts(store.get('queryParams'), 10);
    //   getUsers(10, (results: Array<Users>) => {
    //     let newData: Array<CardData> = [];
    //     for (var i = 0; i < results.length; i++) {
    //       newData.push({
    //         title: `${results[i].name.first}  ${results[i].name.last}`,
    //         description: results[i].email,
    //         image: results[i].picture.large
    //       });
    //     }
    //     let tempData = store.get('data');
    //     store.set('data')(tempData.concat(newData));
    //   });
    //   store.set('loading')(false);
    // }
  });
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initalState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
