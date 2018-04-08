const Task = require("../models/Task");
const Pod = require("../models/Pod");

//"Task" is analogous to User

exports.listAllTasks = (req, res) => {
	Task.find({}, (err, task) => {
		if (err) {
			res.status(500).send(err);
		} else {
		res.status(200).json(task);
}
	});	
};

exports.createNewTask = (req, res) => {
	let newTask = new Task(req.body);
	newTask.save((err, task) => {
		if (err) {
			res.status(500).send(err);
		}else
			res.status(201).json(task);
	});
};

exports.readTask = (req, body) => {
	Task.findById(req.params.taskid, (err, task) => {
		if (err) {
			res.status(500).send(err);
		} else 
		res.status(200).json(task);
	});
};

exports.updateTask = (req, res) => {
	Task.findOneAndUpdate(
	{ _id: req.params.taskid },
	req.body,
	{ new: true },
	(err, task) => {
		if (err) {
			res.status(500).send(err);
		} else 
		res.status(200).json(task);
		}
	);
};

exports.deleteTask = (req, res) => {
	Task.remove({ _id: req.params.taskid }, (err, task) => {
		if (err) {
			res.status(404).send(err);
		} else
		res.status(200).json({ message: "Task successfully deleted" });
	});
};

// Methods to create Pods:



exports.listAllPods = (req, res) => {
	Task.find({}, (err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else {
		res.status(200).json(pod);
}
	});	
};

exports.createNewPod = (req, res) => {
	let newPod = new Pod(req.body);
	newPod.save((err, pod) => {
		if (err) {
			res.status(500).send(err);
		}else
			res.status(201).json(pod);
	});
};

exports.readPod = (req, body) => {
	Task.findById(req.params.podId, (err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else 
		res.status(200).json(pod);
	});
};

exports.updatePod = (req, res) => {
	Pod.findOneAndUpdate(
	{ _id: req.params.podId },
	req.body,
	{ new: true },
	(err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else 
		res.status(200).json(pod);
		}
	);
};

exports.deletePod = (req, res) => {
	Pod.remove({ _id: req.params.podId}, (err, pod) => {
		if (err) {
			res.status(404).send(err);
		} else
		res.status(200).json({ message: "Task successfully deleted" });
	});
};
/*
exports.listAllPods = (req, res) => {
	Pod.find({}, (err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else {
		res.status(200).json(pod);
		}
	});	
};


exports.createNewPod = (req, res) => {
	let newPod = new Pod(req.body);
	newPod.save((err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).json(pod);
		}
	});
};

exports.findPodByID = (req, body) => {
	Pod.findById(req.params.podId, (err, pod) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(pod);
		}
	});
};

exports.updatePod = (req, res) => {
	Pod.findOneAndUpdate(
	{ _id: req.params.podId },
	req.body,
	{ new: true },
	(err, pod) => { 
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(pod);
		}
	});
};

exports.deletePod = (req, res) => {
	Pod.remove({ _id: req.params.podid }, (err, pod) =>{
		if (err) {
			res.status(404).send(err);
		} else {
			res.status(200).json({ message: "Pod was wiped off the face of the Eart" });
		}
	});
};

**/
