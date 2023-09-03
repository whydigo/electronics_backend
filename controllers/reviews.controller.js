const Review = require("../models/Reviews.model");
const Product = require("../models/Product.model");
const jwt = require("jsonwebtoken");

module.exports.reviewsController = {
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.find().populate("product");

      res.json(reviews);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  postReviews: async (req, res) => {
    const { text, product } = req.body;
    const { authorization } = req.headers;
    const [type, token] = authorization.split(" ");

    try {
      const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY);
      const reviews = await Review.create({ text, product, user: payload.id });

      const data = await reviews.populate("user");
      return res.json(data);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  deleteReviews: async (req, res) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);
  
      if (!deletedReview) {
        return res.status(404).json({ error: "Отзыв не найден" });
      }
  
      res.json("Отзыв удален успешно");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  
};
