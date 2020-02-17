import User from "../models/Users";
import { encryptPassword, comparePasswords } from "../util/password";
import { generateAvatar } from "../util/generateAvatar";
import { generateJWT } from "../util/generateJWT";
import { generateError } from "../util/generateError";

export const saveNewUser = async userInfo => {
  const { username, email, password } = userInfo;
  let newPassword = await encryptPassword(password);
  let avatar = generateAvatar(email);
  let newUser = new User({ username, email, avatar, password: newPassword });
  await newUser.save();
  return await generateJWT(newUser.username);
};

export const getToken = async userInfo => {
  const { login, password } = userInfo;
  let userByEmail = await User.findOne({ email: login });
  let userByUserName = await User.findOne({ username: login });
  if (!!userByEmail && (await comparePasswords(password, userByEmail.password)))
    return await generateJWT(userByEmail.username);
  else if (
    !!userByUserName &&
    (await comparePasswords(password, userByUserName.password))
  )
    return await generateJWT(userByUserName.username);
  throw generateError("INVALID_LOGIN");
};
