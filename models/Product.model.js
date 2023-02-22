const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String, //картинка
  name: String, //наименование
  description: String, //описание,
  price: String, //цена
  discount: String, //скидка
  info_0: String, //модель
  info_1: String, //питание
  info_2: String, //Емкость аккумулятора
  info_3: String, //Тип матрицы
  info_4: String, 
  info_5: String, 
  info_6: String, 
  info_7: String, 
  info_8: String, 
  info_9: String, 
  info_10: String, 
  info_11: String, 
  info_12: String, 
  info_13: String, 
  info_14: String, 
  info_15: String, 
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