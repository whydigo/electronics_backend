const mongoose = require("mongoose");

const headsetSchema = mongoose.Schema({
    //-----------Обязательные---------------
    name: String,                           // название
    description: String,                    // описание
    image: String,                          // картинка
    price: Number,                          // цена
    discount: Number,                       // скидка
    //-----------Необязательные-------------
    compatibility: String,                  // совместимость
    connectType: String,                    // тип соединения
    connector: String,                      // разьем
    characteristics: String,                // характерестики
    techFeatures: String,                   // технические особенности
    nutrition: String,                      // питание
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

const Headset = mongoose.model('Headset', headsetSchema);

module.exports = Headset;