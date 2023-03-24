const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const productRoutes = require('./product-routes');
const profileRoutes = require('./profile-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/products', productRoutes);
router.use('/profile', profileRoutes);

module.exports = router;