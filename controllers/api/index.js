const router = require("express").Router();
const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const productRoutes = require("./product-routes");
const categoryRoutes = require("./category-routes");
const profileRoutes = require("./profile-routes");

router.use("/user", userRoutes);
router.use("/projects", projectRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
