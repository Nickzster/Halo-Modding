import { Effects, createConnectedStore } from "undux";
import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
// import
import { getDataFromAPI as fetchData } from "../../utils/GetData";

// Declare your store's types.
interface State {
  loading: boolean;
  posts: Post[];
  reachedBottom: boolean;
  page: number;
  queries: string;
  error: boolean;
}

// Declare your store's initial state.
const initialState: State = {
  loading: false,
  posts: [],
  reachedBottom: false,
  page: 0,
  queries: "",
  error: false
};

const getData = async (query: string): Promise<Post[] | Error> => {
  try {
    let data: Promise<Post[] | Error> = (await fetchData("/posts" + query))
      .json()
      .catch(err => {
        throw err;
      });
    return data;
  } catch (err) {
    return { code: "UNEXPECTED_ERROR", message: "Something has gone wrong!" };
  }
};

let effects: StoreEffects = store => {
  store.on("loading").subscribe(async () => {
    if (store.get("loading")) {
      if (store.get("reachedBottom") === false) {
        let queryString = ``;
        let currentPage = store.get("page");
        currentPage++;
        store.set("page")(currentPage);
        queryString += store.get("queries");
        console.log(!!store.get("queries"));
        if (!!store.get("queries")) queryString += `&page=${store.get("page")}`;
        else queryString += `?page=${store.get("page")}`;
        let response: any = await getData(queryString);
        console.log("RESPONSE", response);
        if (response && response.code) {
          console.log("WE ARE AT THE BOTTOM!");
          store.set("reachedBottom")(true);
        } else {
          console.log("APPEND NEW POSTS!");
          store.set("posts")(store.get("posts").concat(response));
        }
      }
      store.set("loading")(false);
    }
  });
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
