const { userRegister, userLogin, userCurrent, userLogout } = require("./users");

const { getAllGames, getOneGame } = require("./games");

module.exports = {
  userRegister,
  userLogin,
  userCurrent,
  userLogout,
  getAllGames,
  getOneGame,
};
