const express = require("express");
const router = express.Router();

const {getController,
    createController,
    getControllerByID,
    deleteContoller,
    updateContoller} =require("../controller/tasksController");

router.route("/").get(getController).post(createController);
router.route("/:id").get(getControllerByID).patch(updateContoller).delete(deleteContoller);


module.exports = router;
