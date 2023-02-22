const { Router } = require("express");
const { productController } = require("../controllers/products.controller");
const file = require("../middlewares/file");

const router = Router();

router.get("/product", productController.getProduct);
router.post("/product", file.single("img"), productController.postProduct);
router.patch("/product/:productId", productController.editProduct);
router.delete("/product/:productId", productController.deleteProduct);

module.exports = router;
