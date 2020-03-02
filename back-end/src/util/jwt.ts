import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/imports";
import { User } from "../types/User";

export const generateJWT = async (username: string): Promise<string> => {
  const generateJwt = new Promise<string>((resolve, reject) => {
    jwt.sign(
      { user: username },
      jwtSecret(),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
  return await generateJwt;
};

export const getUserFromToken = async (token: string): Promise<User> => {};
