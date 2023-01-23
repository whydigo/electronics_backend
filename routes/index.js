const { Router } = require("express");
const router = Router();

router.use(require("./user.route"));
router.use(require("./categories.route"));
router.use(require("./camera.route"))
router.use(require("./smartWatch.route"))
router.use(require("./headset.route"))


module.exports = router;