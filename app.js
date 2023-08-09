
const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoute");
const connectDB= require('./db/connect');
require("dotenv").config();


const errorHandlerMiddleware = require("./errorMiddleWare/error-handler");


app.use(express.static("./public"))
app.use(express.json());


// api

app.use("/api/v1/tasks", tasks);

// error handler
app.use(errorHandlerMiddleware);



// server and DB  
const port = 3000;
const start =async () =>{
try{
await connectDB();
app.listen(port, console.log(`Server listening at port ${port}...`));
} catch(err){
    console.log(err);
}
} 
start();
