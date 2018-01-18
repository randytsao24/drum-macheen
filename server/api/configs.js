// server/api/configs.js
// Routes for our configurations - keep 'em RESTFUL

'use strict';

const router = require('express').Router();
const { Configuration } = require('../db/models');

router.get('/', (req, res, next) => {
  // Fetch all pads from our database
  Configuration.findAll()
    .then(configs => res.json(configs))
    .catch(next);
});

module.exports = router;

