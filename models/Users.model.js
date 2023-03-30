const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    },
    wholesaler: {
        type: Boolean,
        default: false
    },
	 cart: [{
		ref:"Product",
		type: mongoose.SchemaTypes.ObjectId,
	 }	
	 ]
})

const User = mongoose.model('User', userSchema)
module.exports = User