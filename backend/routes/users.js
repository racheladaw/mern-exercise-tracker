const router = require('express').Router();
//requiring user model
let User = require('../models/user.model');

//route for get requests to '/users/' url path
router.route('/').get((req, res) => {
  //.find is a mongoose method that will get list of all users from mongoDB Atlas
  //.find returns a promise
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for post requests to '/users/add'
router.route('/add').post((req, res) => {
  const username = req.body.username;
  //creating new instance of user using the username from the request body
  const newUser = new User({username});
  //.save is a mongoose method that will save the document to the database
  //.save returns a promise
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//exporting the router
module.exports = router;
