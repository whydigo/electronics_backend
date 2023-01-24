const mongoose = require("mongoose");

const smartWatchSchema = mongoose.Schema({
  image: String,//картинка
  name: String,//наименование
  description: String, //описание,
  price: Number, //цена
  discount: Number, //скидка
  nutrition: String, //питание
  batteryCapacity: String, //Емкость аккумулятора
  screenDiagonal: String, // диагональ экрана
  screenResolution: String, //разрешение экрана
  typeOfScreen: String, //тип экрана
  model: String, //модель
  theBatteryChargingTime: String, //время зарядки батареии
  additionalOptionsForSmartHours: String, //Доп. опции смарт-часов
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
	ref: "Category",
 },
});

const SmartWatch = mongoose.model("SmartWatch",smartWatchSchema);
module.exports = SmartWatch;