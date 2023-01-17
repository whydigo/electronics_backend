const { Router } = require("express");
const { laptopsController } = require("../controllers/laptops.controller");

const router = Router();

router.get("/laptops", laptopsController.getLaptops);
router.post("/laptops", laptopsController.addLaptop);
router.patch("/laptops/:laptopsId", laptopsController.editLaptop);
router.delete("/laptops/:laptopsId", laptopsController.deleteLaptop);

module.exports = router;