const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
  product: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product"
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;