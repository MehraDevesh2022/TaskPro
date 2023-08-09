class customApiError extends Error{
constructor(message , statusCode){
 super(message);
  this.statusCode = statusCode
}

}
const createCustomError = (msg , statusCode) =>{
    console.log("sree radhe22");
return new customApiError(msg , statusCode ) // intance of customApiError class
}

module.exports = {createCustomError , customApiError};