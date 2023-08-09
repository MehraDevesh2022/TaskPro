
const notFound = (req, res) => res.status(404).send("Route does not exist");
// no use
console.log("not found");
module.exports = notFound; 