const sequelize = require("../config/connection");
const { Category, Product, Client, Contractor, Review } = require("../models");

const categoryData = require("./categoryData.json");
const productData = require("./productData.json");
const clientData = require("./clientData.json");
const contractorData = require("./contractorData.json");

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
