const router = require('express').Router();
const tourRoutes = require('./tour-routes');
const userRoutes = require('./user-routes');

router.use('/tour', tourRoutes);
router.use('/user', userRoutes);


module.exports = router;