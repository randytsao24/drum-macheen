// server/db/models/index.js
// Collection point for our models!

const User = require('./user');
const Pad = require('./pad');
const Configuration = require('./config');
const Sample = require('./sample');

/**
 * ASSOCIATIONS
 */

User.hasMany(Configuration);
Pad.belongsTo(Sample);

/**
 * We'll export all of our models here...
 */
module.exports = {
  User,
  Pad,
  Configuration,
  Sample
};
