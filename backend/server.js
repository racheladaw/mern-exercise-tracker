const express = require('express');
const cors = require('cors');
//helps connect to mongoDB database
const mongoose = require('mongoose');

//configures so we can have ENV variables in dotenv file
require('dotenv').config();

//creates express server and port
const app = express();
const port = process.env.PORT || 5000;

//adding cors middleware
app.use(cors());
//middleware to allow us to parse json
app.use(express.json());

//the database uri for mongoDB
const uri = process.env.ATLAS_URI;
//starting connection to database.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true} );
const connection = mongoose.connection;
//logs once connection is established
connection.once('open', () => {
  console.log("MongoDB database connection established successfully!");
});

//this line starts server and listens on certain port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
