const { userRegister, userLogin, userCurrent, userLogout } = require("./users");

const { getAllGames } = require("./games");

module.exports = {
  userRegister,
  userLogin,
  userCurrent,
  userLogout,
  getAllGames,
};
