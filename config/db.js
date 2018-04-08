
const mongoose = require("mongoose");

const db_URI = 
	"mongodb://User_01:verysecurepassword@cluster0-shard-00-00-dcddn.mongodb.net:27017,cluster0-shard-00-01-dcddn.mongodb.net:27017,cluster0-shard-00-02-dcddn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

const options = {
	reconnectTries: Number.Max_Value,
	poolSize: 10
};
 
mongoose.connect(db_URI, options).then(
	() => {
		console.log("Database connection established!");
		},
	err => {
		console.log("Error connecting Database instance due to: ", err);
	}
);

require("../models/Pod");
require("../models/Task");
