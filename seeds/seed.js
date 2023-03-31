const sequelize = require("../config/connection");
const { Category, Product, User, Project } = require("../models");

const categoryData = require("./categoryData");
const productData = require("./productData");
const userData = require("./userData");
const projectData = require("./projectData");
// const contractorData = require("./contractorData.json");

const hasRecords = () => Category.count() > 0;

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData);

  const product = await Product.bulkCreate(productData);

  const project = await Project.bulkCreate(projectData);

  process.exit(0);
};

if (!hasRecords()) {
  seedDatabase();
}
