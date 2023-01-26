const { Router } = require("express");
const router = Router();

router.use('/api', require("./upload"))
router.use(require("./user.route"));
router.use(require("./categories.route"));
router.use(require("./camera.route"))
router.use(require("./smartWatch.route"))
router.use(require("./headset.route"))
router.use(require("./laptop.route"))
router.use(require("./smarthones.route"))
router.use(require("./tablet.route"))
router.use(require("./television.route"))


module.exports = router;