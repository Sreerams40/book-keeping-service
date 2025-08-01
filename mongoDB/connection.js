const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECT) // connects to mongoDB database
  .then(() => {
  console.log("connected to mongoDB");
  })
  .catch((error) => {
   console.log(`error connecting mongoDB: ${error}`);
  });

module.exports = mongoose;