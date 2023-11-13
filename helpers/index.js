const HttpError = require("../helpers/HttpError").default;

const {
  userSchema,
  registerSchema,
  loginSchema,
  gameSchema,
} = require("./schemas");

module.exports = {
  HttpError,
  userSchema,
  registerSchema,
  loginSchema,
  gameSchema,
};
