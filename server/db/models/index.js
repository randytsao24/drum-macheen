// server/db/models/index.js
// Collection point for our models!

const User = require('./user');
const Pad = require('./pad');
const Configuration = require('./config');

/**
 * ASSOCIATIONS
 */

User.hasMany(Configuration);

/**
 * We'll export all of our models here...
 */
module.exports = {
  User,
  Pad,
  Configuration
};
