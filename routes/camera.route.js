const { Router } = require("express");
const { cameraController } = require("../controllers/cameras.controller");


const router = Router();

router.get("/camera", cameraController.getCamera);
router.get("/camera/:id", cameraController.getCameraById);
router.post("/camera", cameraController.postCamera);
router.patch("/camera/:cameraId", cameraController.editCamera);
router.delete("/camera/:cameraId", cameraController.deleteCamera);


module.exports = router;