const { Router } = require("express");
const { consolesController } = require("../controllers/consoles.controller");

const router = Router();

router.get("/consoles", consolesController.getConsoles);
router.post("/consoles", consolesController.addConsole);
router.patch("/consoles/:consoleId", consolesController.editConsole);
router.delete("/consoles/:consoleId", consolesController.deleteConsole);

module.exports = router;
