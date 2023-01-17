const mongoose = require("mongoose");

const consoleSchema = mongoose.Schema({
  //---------- Характеристики
  processorClockSpeed: String,   // тактовая частота процессора
  cpu: String,                   // процессор
  wirelessInterfaces: String,    // беспроводные интерфейсы
  numberOfHDMIPorts: String,     // количество портов HDMI
  interface: String,             // интерфейс
  numberOfUSBPorts: String,      // количество портов USB
  model: String,                 // модель
  warrantyPeriod: String,        // гарантийный срок
  nutrition: String,             // питание
  ram: String,                   // объем оперативной памяти
  builtInMemory: String,         // объем встроенной памяти
  videoProcessor: String,        // видеопроцессор
  //-----------  Дальше все обязательно!
  image: String,
  name: String,
  description: String,
  price: Number,
  discount: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
  },
  reviews: [
    {
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
});

const Console = mongoose.model("Console", consoleSchema);
module.exports = Console;
