const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.midlware");

const router = Router();

router.get("/users", usersController.getAllUsers);
router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.patch(
  "/addtoCart/:userId/:cartId",
  authMiddleware,
  usersController.addToCart
);
router.patch(
  "/deleteFromCart/:userId/:cartId",
  authMiddleware,
  usersController.deleteFromCart
);

module.exports = router;
