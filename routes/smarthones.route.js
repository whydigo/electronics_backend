const { Router } = require("express")
const { smarthoneController } = require("../controllers/smarthones.controller")

const router = Router()

router.get("/smarthones", smarthoneController.getSmarthones)
router.post("/smarthones", smarthoneController.addSmarthones)
router.patch("/smarthones/:smarthoneId", smarthoneController.editSmarthones)
router.delete("/smarthones/:smarthoneId", smarthoneController.deleteSmarthones)

module.exports = router