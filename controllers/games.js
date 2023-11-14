const Game = require("../models/game");

const limit = 9;

const getAllGames = async (req, res, next) => {
  const { genre, page, sortBy } = req.query;

  const sortRule = sortBy === "first old" ? "date" : "-date";

  try {
    const filter = genre === "ALL" ? {} : { genre };
    const resultAll = await Game.find(filter).sort(sortRule);

    const result = resultAll.slice(0, limit * page);

    res.status(200).json({
      data: result,
      status: "OK",
      total: resultAll.length,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGames,
};
