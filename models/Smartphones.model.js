const mongoose = require("mongoose")



const smarthoneShema = mongoose.Schema({
    wirelessInterfaces: String, // Беспроводные интерфейсы
    numberOfSimCards: Number,  // Количество SIM карт
    operatingSystemVersion: String, // Версия операционной системы
    model: String, // Модель
    screenDiagonal: String, // Диагональ экрана
    screenResolution:String, //  Разрешение экрана
    numberProcessorCores:Number, // Количество ядер процессора
    cpu:String, // Процессор
    builtInMemory:String, // Объем встроенной памяти
    ram:String, // Объем оперативной памяти
    memoryCardType:String, // Тип карты памяти
    batteryCapacity:String, // Емкость аккумулятора
    image:String,
    name:String,
    decription:String,
    price:Number,
    discount:Number,
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Category"
    },
    reviews: [
        {
            user:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"User",
            },
            text:String,
        },
    ],
});

const Smarthone = mongoose.model("Smarthone",smarthoneShema)

module.exports = Smarthone