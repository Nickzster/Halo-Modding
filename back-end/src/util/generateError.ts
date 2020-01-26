import { Error } from '../types/Error';

const errors = {
  USER_NAME_IS_NULL: 'Invalid User Name was specified!',
  EMAIL_IS_NULL: 'Invalid Email was specified!',
  GAME_IS_NULL: 'Invalid Halo Game was specified!',
  PROJECT_TYPE_IS_NULL: 'Invalid Project Type was specified!',
  PROJECT_TITLE_IS_NULL: 'Invalid Project Title was specified!',
  IMAGES_IS_INVALID: 'Invalid Images were specified!',
  DESCRIPTION_IS_NULL: 'Invalid Description was specified!',
  CANNOT_FIND_POST_BY_ID: 'Cannot find the post specified!',
  CANNOT_FIND_POSTS: 'Something has gone wrong!',
  CANNOT_SAVE_POST: 'Something went wrong with your new post!',
  REACHED_BOTTOM: 'It looks like you have reached the bottom!',
  INVALID_PARAM: 'Invalid Parameter Specified!',
  TOXICITY_DETECTED:
    'Please check your username, project title, and project description for any NSFW content.',
  NO_MESSAGE: 'The specified error code does not have a message!'
};

export const generateError = (code: string) => {
  let err: Error = {
    code: '',
    message: ''
  };
  err.code = code;
  let message = errors[code];
  if (message === null || message === undefined)
    err.message = errors['NO_MESSAGE'];
  else err.message = message;
  return err;
};
