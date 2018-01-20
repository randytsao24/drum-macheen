// server/api/pads.js
// Routes for our pads - keep 'em RESTFUL

'use strict';

const router = require('express').Router();
const { Pad } = require('../db/models');

router.get('/', (req, res, next) => {
  // Fetch all pads from our database
  Pad.findAll()
    .then(pads => res.json(pads))
    .catch(next);
});

module.exports = router;

