const Review = require("../models/Reviews.model");

module.exports.reviewsController = {
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.find();

      res.json(reviews);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  postReviews: async (req, res) => {
    const { text, product } = req.body; 
    try {
      const reviews = await Review.create({ text, product });

      const data = await res.json(reviews);
      return data;
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  deleteReviews: async (req, res) => {
    try {
      const reviews = await Review.findByIdAndDelete(req.params.reviewId);

      res.json("Удалено");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
