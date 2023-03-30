const router = require("express").Router();
const { User, Project, Product, Category } = require("../../models");
const withAuth = require("../../utils/auth");

// Products page: (after selecting a category by id)
// ‘/’ display products, findall products by category id
// ‘/startProject’ route to project creation with the product (autofill the form)

// need a find all products

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
