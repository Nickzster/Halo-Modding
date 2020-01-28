import { Post } from '../types/Post';
import { Error } from '../types/Error';
import { baseURL } from '../utils/url';

export const sendData = async (data: Post): Promise<Post & Error> => {
  try {
    let response = await fetch(`${baseURL}/posts/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};
