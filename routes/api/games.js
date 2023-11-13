const express = require("express");

const ctrl = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.getAllGames);

router.get("/:gameId", ctrl.getOneGame);

module.exports = router;
