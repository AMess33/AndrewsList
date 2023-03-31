const router = require("express").Router();
const { User, Project } = require("../../models");
const withAuth = require("../../utils/auth");

// post route to make a new project
router.get("/project", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // do we want to actually redirect to home instead of profile?
    res.redirect("newProject");
    return;
  }

  res.render("login");
});


module.exports = router;
