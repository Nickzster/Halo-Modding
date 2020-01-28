import { Effects, createConnectedStore } from 'undux';
import { Post } from '../../types/Post';
import { Error } from '../../types/Error';
import { baseURL } from '../../utils/url';
// import

// Declare your store's types.
interface State {
  newPost: Post | [];
}

// Declare your store's initial state.
const initialState: State = {
  newPost: []
};

let effects: StoreEffects = store => {
  store.on('newPost').subscribe(() => {});
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
