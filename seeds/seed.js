const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

const categoryData = require("./categoryData");
const productData = require("./productData");
const userData = require("./userData");
// const contractorData = require("./contractorData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //   const users = await User.bulkCreate(userData, {
  //     individualHooks: true,
  //     returning: true,
  //   });

  //   for (const project of projectData) {
  //     await Project.create({
  //       ...project,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
