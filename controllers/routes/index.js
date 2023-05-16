const guideRoutes = require('./guide-routes');
const tourRoutes = require('./tour-routes');

router.use('/guide', guideRoutes);
router.use('/tour', tourRoutes);


module.exports = router;