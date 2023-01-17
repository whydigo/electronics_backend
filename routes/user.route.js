const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.get("/users", usersController.getAllUsers);
router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);

module.exports = router;