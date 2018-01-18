// server/api/index.js
// Collection point for our routes!

const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/pads', require('./pads'));

// Error handler
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
