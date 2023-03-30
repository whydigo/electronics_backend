const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  description: String,
  price: String,
  discount: String,
  info_0: String,
  info_1: String,
  info_2: String,
  info_3: String,
  info_4: String, 
  info_5: String, 
  info_6: String, 
  info_7: String, 
  info_8: String, 
  info_9: String, 
  reviews: [
    {
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
  category: {
	type: mongoose.SchemaTypes.ObjectId,
	ref: "Category"
 },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;