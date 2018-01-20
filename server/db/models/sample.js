// server/db/models/sample.js
// This file contains the model definition for an individual
// sample.

const Sequelize = require('sequelize');
const db = require('../db');

const Sample = db.define('sample', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'black'
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: 'Uncategorized'
  }
})

module.exports = Sample;
