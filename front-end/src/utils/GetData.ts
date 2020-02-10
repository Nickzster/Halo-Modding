import { Observable } from "rxjs";
import { baseURL } from "./url";

// interface Tutorial {
//   title: string;
//   author: string;
//   description: string;

// }

// const getMaps: Observable = new Observable();
export const getDataFromAPI = async (url: string) => {
  return await fetch(`${baseURL}${url}`, {
    mode: "cors",
    headers: { "Access-Control-Allow-Origin": "*" }
  });
};
