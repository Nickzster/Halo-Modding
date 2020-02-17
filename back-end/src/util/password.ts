import bcrypt from "bcryptjs";

export const encryptPassword = async (pass: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
};

export const comparePasswords = async (
  pass: string,
  encrypted: string
): Promise<boolean> => {
  return await bcrypt.compare(pass, encrypted);
};
