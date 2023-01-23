const { Router } = require("express");
const { headsetsController } = require("../controllers/headsets.controller");


const router = Router();

router.get("/headset", headsetsController.getHeadset);
router.post("/headset", headsetsController.postHeadset);
router.patch("/headset/:cameraId", headsetsController.patchHeadset);
router.delete("/headset/:cameraId", headsetsController.deleteHeadset);


module.exports = router;