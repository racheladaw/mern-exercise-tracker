const router = require('express').Router();
//requiring exercise model
let Exercise = require('../models/exercise.model');

//route for get requests to '/exercises/' url path
router.route('/').get((req, res) => {
  //.find is a mongoose method that will get list of all exercises from mongoDB Atlas
  //.find returns a promise
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for post requests to '/exercises/add'
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  //converting duration to a number
  const duration = Number(req.body.duration);
  //converting date to date datatype
  const date = Date.parse(req.body.date);

  //creating new instance of exercise using the username, desc, duration, and date from the request body
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });
  //.save is a mongoose method that will save the document to the database
  //.save returns a promise
  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//exporting the router
module.exports = router;
