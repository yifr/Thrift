const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");

require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app
	.route("/login")
	.get(taskController.listAllTasks)
	.post(taskController.createNewTask);

app
	.route("/tasks/:taskid")
	.get(taskController.readTask)
	.put(taskController.updateTask)
	.delete(taskController.deleteTask);

app
	.route("/pods")
	.get(taskController.listAllPods)
	.post(taskController.createNewPod);

app
	.route("/pods/:podId")
	.get(taskController.readPod)
	.put(taskController.updatePod)
	.delete(taskController.deletePod);

app.listen(port, () => {
	console.log('Server running at http://localhost:${port}');
});
