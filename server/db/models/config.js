// server/db/models/pad.js
// This file contains the model definition for configurations

const Sequelize = require('sequelize');
const db = require('../db');

const Configuration = db.define('configuration', {
  padAmount: {
    type: Sequelize.INTEGER,
    defaultValue: 16,
    validate: {
      min: 1,
      max: 32
    }
  },
  columnAmount: {
    type: Sequelize.INTEGER,
    defaultValue: 4,
    validate: {
      min: 2,
      max: 8
    }
  }
});

module.exports = Configuration;
