const { model } = require("mongoose");
const { gameSchema } = require("../helpers");

const Game = model("game", gameSchema);

module.exports = Game;
