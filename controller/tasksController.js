const TaskModel = require("../model/TasksModel");

const { createCustomError } = require("../customErrorClass/custom.error");
const asyncWrapper = require("../errorMiddleWare/async");

const getController = asyncWrapper(async (req, res) => {
  const tasks = await TaskModel.find();
  return res.status(200).json({
    tasks: tasks,
    msg: "All task sucessfully founded",
  });
});

const createController = asyncWrapper(async (req, res) => {
  const newTask = await TaskModel.create(req.body);
  res.status(201).json({
    tasks: newTask,
    msg: "new Task is created successfully",
  });
});

const getControllerByID = asyncWrapper(async (req, res, next) => {
  const { id: findTask } = req.params;
  const task = await TaskModel.findOne({ _id: findTask });
  if (!task) {
    return next(
      createCustomError(`Task with this _id ${findTask} not found`, 404)
    ); // createCustomError fn called params pass as msg and statuscode
  }
  res.status(200).json({
    task: task,
    success: true,
  });
});

const updateContoller = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const updateTask = await TaskModel.findByIdAndUpdate(
    { _id: taskId },
    req.body,
    {
      new: true, // update with new dataSame time in db
      runValidators: true, // runValidators will apply for new data as well
    }
  );
  if (!updateTask) {
    return next(createCustomError(`Task with id ${taskId} not found`, 404)); // createCustomError(msg. statuscode)
  }
  res.status(200).json({ success: true, task: updateTask });
});

const deleteContoller = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await TaskModel.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Task with this _id ${taskID} not found`, 404)
    );
  }

  res.status(200).json({ success: true, taskID: null }); // when document is deleted then retrun that value null only or nothing
});

module.exports = {
  getController,
  createController,
  getControllerByID,
  deleteContoller,
  updateContoller,
};
