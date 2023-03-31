const router = require("express").Router();
const { User, Project, Product, Category } = require("../../models");
const withAuth = require("../../utils/auth");

// find product by id
router.get("/:id/products", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: "products",
        },
      ],
    });
    const category = categoryData.get({ plain: true });
    res.render("products", {
      products: category.products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route to create new project

module.exports = router;
