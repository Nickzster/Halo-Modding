import { Effects, createConnectedStore } from "undux";
import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
import { FetchParameters } from "../../types/FetchParameters";
import { debounceTime, concat } from "rxjs/operators";
import { Observable } from "rxjs";
import { fromEvent } from "rxjs";
// import
import { getDataFromAPI as fetchData } from "../../utils/GetData";
import { buildQueryString } from "../../utils/BuildQueryString";

const scroll: Observable<Event> = fromEvent(document, "scroll").pipe(
  debounceTime(200)
);

const needMoreData = () => {
  console.log("Need more data?");
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 1000
  )
    return true;
  return false;
};

// Declare your store's types.
interface State {
  fetch: boolean;
  more: boolean;
  posts: Post[];
  page: number;
  query: string;
}

// Declare your store's initial state.
const initialState: State = {
  fetch: false,
  more: true,
  posts: [],
  page: 0,
  query: ""
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
  store.on("fetch").subscribe(async () => {
    if (store.get("more")) {
      console.log("Fetching more posts!");
      store.set("page")(store.get("page") + 1);
      let response: any = await getData(
        buildQueryString(store.get("query"), store.get("page"))
      );
      if (response && response.code) {
        store.set("more")(false);
      } else store.set("posts")(store.get("posts").concat(response));
    } else {
      console.log("Tried to fetch, but there are no more posts to fetch!");
    }
  });
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
