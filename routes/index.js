const { Router } = require("express");
const router = Router();

router.use(require("./user.route"));
router.use(require("./smarthones.route"))

module.exports = router;