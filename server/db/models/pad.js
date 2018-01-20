// server/db/models/pad.js
// This file contains the model definition for an individual
// drum pad.

const Sequelize = require('sequelize');
const db = require('../db');

const Pad = db.define('pad', {
  position: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 32
    }
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: 'black'
  },
  assignedKey: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Pad;
