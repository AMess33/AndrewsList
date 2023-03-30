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

// // get route for projects...findall by pk
// router.get("/", async (req, res) => {
//   try {
//     console.log({ session: req.session });
//     const user = await User.findByPk(req.session.user_id);
//     console.log({ user });

//     // const projectData = await Project.findAll({
//     //   where: { user_id: req.session.user_id },
//     // });
//     // console.log({ projectData });

//     // Get all projects and JOIN with user data
//     // const projectData = await User.findByPk(req.session.user_id, {
//     //   include: [
//     //     {
//     //       model: Project,
//     //       attributes: ["user_id"],
//     //     },
//     //   ],
//     // });

//     // Serialize data so the template can read it
//     // const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("profile", {
//       contractor: user.isContractor,
//       projects: [],
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// currently not needed.
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
