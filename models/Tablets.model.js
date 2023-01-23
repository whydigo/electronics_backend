const mongoose = require("mongoose");

const tabletsSchema = mongoose.Schema({
    name: String,                      // Название
    description: String,               // описание
    image: String,                     // картинка
    price: Number,                     // цена
    discount: Number,                  // скидка
	 model:String,                      //модель
    cpu: String,                       // процессор
    numberOfProcessorCores: Number,    // Количество ядер процессора
    numberOfSimCards: String,          // Количество SIM карт
    screenResolution: Number,          // Разрешение экрана
    ram: String,                       // Объем оперативной памяти
    builtInMemory: String,             // Объем встроенной памяти
    batteryCapacity: String,           // Емкость аккумулятора
    mainCamera: String,                // Основная камера
    warrantyPeriod:String,             // Гарантийный срок
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    reviews: [
        {
            user: {
                type:mongoose.SchemaTypes.ObjectId,
                ref: "User",
            },
            text: String,
        },
    ],
   });

const Tablets = mongoose.model('Tablets', tabletsSchema)
module.exports = Tablets;
