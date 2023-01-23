const { Router } = require("express");
const { televisionsController } = require("../controllers/televisions.controller");

const router = Router();

router.get("/television", televisionsController.getTelevision);
router.post("/television", televisionsController.postTelevision);
router.patch("/television/:televisionId", televisionsController.postTelevision);
router.delete("/television/:televisionId", televisionsController.deleteTelevision);

module.exports = router;