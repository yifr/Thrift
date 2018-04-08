
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pod_Schema = new Schema({
	Pod_Name: {
		type: String
	}, 
	Pod_People: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	,
	Venue_Id:{type:String}
	}
);

module.exports = mongoose.model("Pod", Pod_Schema);
