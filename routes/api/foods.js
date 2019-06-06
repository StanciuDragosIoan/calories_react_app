const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//@route GET api/foods
//@desc Test route
//@access Public
router.get('/', (req, res) =>
  res.send('Calorica REST API is up and running :)')
);

//@route POST api/foods
//@desc Create a food in the database
//@access Public
router.post(
  '/',
  [
    check('name', 'Please enter a food name of at least 2 letters:)')
      .not()
      .isEmpty()
      .isLength({ min: 2 }),
    check('calories', 'Please enter the of calories for 100g :)')
      .not()
      .isEmpty(),
    check('protein', 'Please enter the protein quantity for 100g :)')
      .not()
      .isEmpty(),
    check('carbohydrate', 'Please enter the carbs contet for 100g :)')
      .not()
      .isEmpty(),
    check('fat', 'Please enter the fat quantity for 100g :)')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('Calorica REST API is up and running :)');
  }
);

module.exports = router;
