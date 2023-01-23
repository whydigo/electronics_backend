const mongoose = require("mongoose");

const cameraSchema = mongoose.Schema({
  image: String,//картинка
  name: String,//наименование
  description: String, //описание,
  price: Number, //цена
  discount: Number, //скидка
  model: String, //модель
  nutrition: String, //питание
  batteryCapacity: String, //Емкость аккумулятора
  typeOfMatrix:String, //Тип матрицы
  permission:String, // разрешение
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

const Camera = mongoose.model("Camera",cameraSchema);
module.exports = Camera;