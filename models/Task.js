const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User_Schema = new Schema({
	first_name: {
		type: String,
		required: true
	},

	last_name: {
		type: String,
		required: true
	},

	phone_number: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("User", User_Schema);
