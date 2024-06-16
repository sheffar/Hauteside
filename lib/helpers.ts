import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";

export const hashPassword = (password: string) => {
  return bcrypt.hashSync("bacon", 8);
};

export const passwordMatch = (
  plainPassword: string,
  hashedPassword: string
) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export const signJWTToken = (id: string) => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "30d" }
  );
  return token;
};

export const isPasswordValid = (password: string) => {
  if (password.length < 8) {
    return false;
  }
  return true;
};


export const isEmailValid = (email: string) => {
  return EmailValidator.validate(email);
};

export const passwordOrEmailIsEmpty = (email: string, password: string) => {
  if (!email.trim() || !password.trim()) {
    return true;
  } else {
    return false;
  }
};

export const passwordOrEmailOrFullnameIsEmpty = (
  email: string,
  password: string,
  fullname: string
) => {
  if ( !fullname.trim() || !email.trim() || !password.trim()) {
    return true;
  } else {
    return false;
  }
};


