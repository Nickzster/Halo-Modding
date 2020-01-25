import { Error } from '../types/Error';

export const generateError = (code: string) => {
  let err: Error = {
    code: '',
    message: ''
  };
  err.code = code;
  switch (code) {
    case 'USER_NAME_IS_NULL':
      err.message = 'Invalid User Name was specified!';
      break;
    case 'EMAIL_IS_NULL':
      err.message = 'Invalid Email was specified!';
      break;
    case 'GAME_IS_NULL':
      err.message = 'Invalid Halo Game was specified!';
      break;
    case 'PROJECT_TYPE_IS_NULL':
      err.message = 'Invalid Project Type was specified!';
      break;
    case 'PROJECT_TITLE_IS_NULL':
      err.message = 'Invalid Project Title was specified!';
      break;
    case 'IMAGES_IS_INVALID':
      err.message = 'Invalid Images were specified!';
      break;
    case 'DESCRIPTION_IS_NULL':
      err.message = 'Invalid Description was specified!';
      break;
    case 'CANNOT_FIND_POST_BY_ID':
      err.message = 'Cannot find the post specified!';
      break;
    case 'CANNOT_FIND_POSTS':
      err.message = 'Something has gone wrong!';
      break;
    case 'REACHED_BOTTOM':
      err.message = 'It looks like you have reached the bottom!';
      break;
    case 'INVALID_PARAM':
      err.message = 'Invalid parameter specified!';
      break;
    default:
      err.message = `ERROR CODE ${code} DOES NOT HAVE A MESSAGE!`;
  }
  return err;
};
