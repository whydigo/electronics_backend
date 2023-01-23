const mongoose = require("mongoose");

const televisionSchema = mongoose.Schema({
    //-----------Обязательные---------------
    name: String,                           // название
    description: String,                    // описание
    image: String,                          // картинка
    price: Number,                          // цена
    discount: Number,                       // скидка
	 model: String,                          // Модель
    //-----------Необязательные-------------
    connection: String,                     // конекторы
    characteristics: String,                // характерестики
    screen: String,                         // экран
    interface: String,                      // интерфейс
    connector: String,                      // разьем
    reviews: [
        {
            user: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
            },
            text: String,
        },
    ],
	 category:{
		type:mongoose.SchemaTypes.ObjectId,
		ref:"Category"
  },
});

const Television = mongoose.model('Television', televisionSchema);

module.exports = Television;