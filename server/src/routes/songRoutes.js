const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

//http://localhost:4000/songs/
songRouter.get("/all", authMiddleware, songController.fetchSongs);
songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.patch("/:id", authMiddleware, songController.updateSong);

module.exports = {
  songRouter,
};