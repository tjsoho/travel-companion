const guideRoutes = require('./guide-routes');
const tourRoutes = require('./tour-routes');
const userRoutes = require('./user-routes');

router.use('/guide', guideRoutes);
router.use('/tour', tourRoutes);
router.use('/user', userRoutes);


module.exports = router;