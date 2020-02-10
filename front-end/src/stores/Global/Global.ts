import { Effects, createConnectedStore } from "undux";

// import

// Declare your store's types.
interface State {
  user: string;
}

// Declare your store's initial state.
const initialState: State = {
  user: "TestUser4242"
};

let effects: StoreEffects = store => {
  store.on("user").subscribe(() => {});
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
