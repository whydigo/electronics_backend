const { Router } = require("express");
const { smartWatchController } = require("../controllers/smartWatch.controller");


const router = Router();

router.get("/smartwatch", smartWatchController.getSmartWatch);
router.post("/smartwatch", smartWatchController.postSmartWatch);
router.patch("/smartwatch/:smartWatchId", smartWatchController.editSmartWatch);
router.delete("/smartwatch/:smartWatchId", smartWatchController.deleteSmartWatch);


module.exports = router;