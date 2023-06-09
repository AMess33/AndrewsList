const router = require("express").Router();
const { Category, User, Product, Project } = require("../models");
const withAuth = require("../utils/auth");

// homepage/landing page route

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({});

    // TODO: Serialize data so the template can read it
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    // TODO: Pass serialized data and session flag into template
    res.render("homepage", {
      categories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    //TODO: go through and change what is needed such as Project
    const projectData = await Project.findAll({
      // where: {
      //   user_id: req.session.user_id,
      // },
    });
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // include: [{ model: User }],
    });

    const user = userData.get({ plain: true });
    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render("profile", {
      ...user,
      projects,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // do we want to actually redirect to home instead of profile?
    res.redirect("profile");
    return;
  }

  res.render("login");
});

// get Project Creation form route
router.get("/newProject", withAuth, async (req, res) => {
  try {
    const productData = await Product.findAll({});
    const products = productData.map((product) => product.get({ plain: true }));
    res.render("newProject", {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
