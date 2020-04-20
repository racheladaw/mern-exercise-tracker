const express = require('express');
const cors = require('cors');

//configures so we can have ENV variables in dotenv file
require('dotenv').config();

//creates express server and port
const app = express();
const port = process.env.PORT || 5000;

//adding cors middleware
app.use(cors());
//middleware to allow us to parse json
app.use(express.json());

//this line starts server and listens on certain port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
