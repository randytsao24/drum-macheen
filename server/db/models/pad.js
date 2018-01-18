// server/db/models/pad.js
// This file contains the model definition for an individual
// drum pad.

const Sequelize = require('sequelize');
const db = require('../db');

const Pad = db.define('pad', {
  color: {
    type: Sequelize.STRING,
    defaultValue: 'black'
  }
})

module.exports = Pad;
