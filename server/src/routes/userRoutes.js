const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/login", authMiddleware, userController.signIn);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.get("/myFavoriteSongs/:id", userController.getMyFavoriteSongs);
userRouter.get("/mySongs/:id", userController.getMySongs);

module.exports = {
  userRouter,
};
