const 
express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
router = require("./routes/index"),

//const { mongoose } = require('./db.js');
 furnitureController = require('./controller/furnitureController.js'),
 //staffController = require('./controller/staffController.js'),
 customerController = require('./controller/customerController.js'),

app = express();

// Mongoose will support my promise chains  
mongoose.Promise = global.Promise;
// Add Mongoose connection to Express.js
mongoose.connect(
// Set up the connection to your database.  
 "mongodb://0.0.0.0:27017/FurnitureDBe");
//mongoose.set("useCreateIndex", true); // not longer neccesary
// Assign the database to the db variable.
const db = mongoose.connection;

// Log a message when the application connects to the database.
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


app.use(bodyParser.json());
app.use(cors({ origin:'http://localhost:4200'}));

// set up the aplication to listen on port 3001
app.set("port", process.env.PORT || 3000);




// localhost : 3000/furniture
//app.use('/furniture', furnitureController);

// localhost : 3000/staff
//app.use('/staff', staffController);

//localhost : 3000/staff
app.use('/customer', customerController);





app.use("/uploads", express.static("uploads"));

// This code tells your Express.js application to use the router object as 
// a system for middleware and routing.
app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });
  