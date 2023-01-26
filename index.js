const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
require('dotenv').config() 
const cors = require('cors');
const path = require('path');
const app = express();


app.use(express.json())
app.use(cors())
app.use(fileUpload());
app.use(require('./routes'))
app.use(express.static(path.resolve(__dirname, "assets")));


const {PORT,MONGO_SERVER} = process.env;

const connectAndStartServer = async() =>{
	try {
		await mongoose.connect(MONGO_SERVER);

		app.listen(PORT, () => {
			console.log(`Успешное соединение. Порт ${PORT}`);
		})
	} catch (e) {
		console.log(`Ошибка при подключении: ${e.toString()}`);
	}
}
connectAndStartServer();