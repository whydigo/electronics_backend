const { Router } = require("express")
const { smarthoneController } = require("../controllers/smarthones.controller")

const router = Router()

router.get("/smartphones", smarthoneController.getSmarthones)
router.post("/smartphones", smarthoneController.addSmarthones)
router.patch("/smartphones/:smarthoneId", smarthoneController.editSmarthones)
router.delete("/smartphones/:smarthoneId", smarthoneController.deleteSmarthones)

module.exports = router