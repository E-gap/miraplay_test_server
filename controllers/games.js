const Game = require("../models/game");

// const limit = 10;

const getAllGames = async (req, res, next) => {
  console.log("start games");
  /* const search = req.query;
  const { page } = req.query;
  const skip = (page - 1) * limit;
  const { sort } = req.query;
  const sortArray = sort && sort.split(" "); */

  /* let sortRule = sort || "-date";
  if (sort && sortArray[1] === "down") {
    sortRule = "-" + sortArray[0].toString();
  } else if (sort && sortArray[1] === "up") {
    sortRule = sortArray[0].toString();
  } */

  /* const newSearch = { ...search };
  delete newSearch.page;
  delete newSearch.sort;
  delete newSearch.limit; */

  try {
    const resultAll = await Game.find();
    console.log(resultAll);

    /* const result = resultAll.slice(skip, skip + limit); */

    res.status(200).json({
      data: resultAll,
      status: "OK",
      total: resultAll.length,
    });
  } catch (error) {
    next(error);
  }
};

const getOneGame = async (req, res, next) => {
  const { gameId } = req.params;
  try {
    const result = await Game.findById(gameId);
    res.status(200).json({
      data: [result],
      status: "OK",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGames,
  getOneGame,
};
