const mongoose = require("mongoose");

const TaskSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: [true, "task name must required"],
    trim: true, // remove extra wide spaces
    maxlength: [20, "Name should be less than 20 character"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("TaskModel" , TaskSchema);

module.exports = TaskModel
module.exports = TaskModel