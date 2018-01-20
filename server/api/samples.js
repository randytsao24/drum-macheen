// server/api/samples.js
// Routes for our samples - keep 'em RESTFUL

'use strict';

const router = require('express').Router();
const { Sample } = require('../db/models');

router.get('/', (req, res, next) => {
  console.log("SUP SUP SUP YOOOO");
  // Fetch all configurations from our database
  Sample.findAll()
    .then(samples => res.json(samples))
    .catch(next);
});

module.exports = router;

