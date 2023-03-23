const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // REdirect user to login page if the logged_in status is false.
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
