const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controllers");

const router = Router();

router.get('/category', categoriesController.getCategories);
router.post('/category', categoriesController.postCategories);
router.delete('/category/:categoryId', categoriesController.deleteCategories);

module.exports = router;