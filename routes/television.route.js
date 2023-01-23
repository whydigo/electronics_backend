const { Router } = require("express");
const { televisionsController } = require("../controllers/televisions.controller");

const router = Router();

router.get("/tablets", televisionsController.getTelevision);
router.post("/tablets", televisionsController.postTelevision);
router.patch("/tablets/:tabletsId", televisionsController.postTelevision);
router.delete("/tablets/:tabletsId", televisionsController.deleteTelevision);

module.exports = router;