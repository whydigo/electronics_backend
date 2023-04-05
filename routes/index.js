const { Router } = require("express");
const router = Router();

router.use('/api', require("./upload"))
router.use(require("./user.route"));
router.use(require("./categories.route"));
router.use(require("./reviews.route"));
router.use(require("./product.route"))


module.exports = router;