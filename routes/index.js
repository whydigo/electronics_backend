const { Router } = require("express");
const router = Router();

router.use(require("./user.route"));
router.use(require("./tablet.route"));

module.exports = router;