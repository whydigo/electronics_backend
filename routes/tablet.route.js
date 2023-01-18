const { Router } = require("express");
const { tabletsController } = require("../controllers/tablets.controller");

const router = Router();

router.get("/tablets", tabletsController.getTablets);
router.post("/tablets", tabletsController.addTablet);
router.patch("/tablets/:tabletsId", tabletsController.editTablet);
router.delete("/tablets/:tabletsId", tabletsController.deleteTablet);

module.exports = router;