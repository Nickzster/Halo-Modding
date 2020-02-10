import { check } from "express-validator/check";

const validateBasicInfo = [
  check("userinfo.username", "Username is required!")
    .not()
    .isEmpty(),
  check("userinfo.email", "Valid email is required!").isEmail(),
  check("game", "Please select a valid game!")
    .not()
    .isEmpty(),
  check("projecttype", "Please select a valid project type!")
    .not()
    .isEmpty(),
  check("projecttitle", "Please enter a project title!")
    .not()
    .isEmpty(),
  check("description", "Please enter a project description!")
    .not()
    .isEmpty()
];

export default validateBasicInfo;
