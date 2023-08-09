const mongoose = require("mongoose");
require("dotenv").config({ path: "config/.env" });

const connectDB =()=>{
mongoose.connect(process.env.DB_LINK);
console.log("connected to DB..."); 
} 
module.exports = connectDB;
  