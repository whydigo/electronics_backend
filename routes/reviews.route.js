const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get('/review', reviewsController.getReviews);
router.post('/review', reviewsController.postReviews);
router.delete('/review/:reviewId', reviewsController.deleteReviews);

module.exports = router;