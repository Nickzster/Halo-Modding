import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Observable } from "rxjs";
//Store

export const scroll: Observable<Event> = fromEvent(document, "scroll").pipe(
  debounceTime(200)
);

export const needMoreData = () => {
  console.log("WINDOW INNER HEIGHT: ", window.innerHeight);
  console.log("DOCUMENT SCROLL TOP", document.documentElement.scrollTop);
  console.log("OFFSET HEIGHT", document.documentElement.offsetHeight);
  if (
    window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1000 ||
    document.documentElement.offsetHeight < 2000
  )
    return true;
  return false;
};
