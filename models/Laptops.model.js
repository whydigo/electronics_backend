const mongoose = require("mongoose");

const laptopsSchema = mongoose.Schema({
    name: String,                      // Название
    description: String,               // описание
    image: String,                     // картинка
    price: Number,                     // цена
    discount: Number,                  // скидка
    processorClockSpeed: String,       // Тактовая частота процессора
    numberOfProcessorCores: Number,    // число процессорных ядер
    processor: String,                 // процессор
    screenResolution: Number,          // разрешение экрана
    updateFrequency:  String,          // Частота обновления
    warrantyPeriod: String,            // гарантийный срок
    videoAdapterMemorySize: String,    // Объем памяти видеоадаптера
    videoAdapter: String,              // видеоадаптер
    batteryCapacity: String,           // емкость батареи
    ram: Number,                       // ОЗУ
    driveType: String,                 // тип оперативной памяти
    ssdStorageCapacity: String,        // Емкость твердотельного накопителя
    housingMaterial: String,           // Материал корпуса
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

const Laptops = mongoose.model('Laptops', laptopsSchema)
module.exports = Laptops;