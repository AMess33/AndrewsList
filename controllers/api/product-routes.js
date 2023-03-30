const router = require("express").Router();
const { User, Project, Product } = require("../../models");
const withAuth = require("../../utils/auth");

// Products page: (after selecting a category by id)
// ‘/’ display products, findall products by category id
// ‘/startProject’ route to project creation with the product (autofill the form)

// need a find all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({});
    const products = productData.map((product) => product.get({ plain: true }));
    res.render("products", {
      products,
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find product by id
router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: "products",
        },
      ],
    });
    const product = productData.get({ plain: true });
    res.render("product", {
      ...product,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route to create new project
router.post("/", withAuth, async (req, res) => {
  try {
    // TODO: need to pass the product id to the form here
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
