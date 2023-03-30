const sequelize = require("../config/connection");
const {
  Category,
  Product,
  User,
  ProjectProduct,
  UserProject,
} = require("../models");

const categoryData = require("./categoryData");
const productData = require("./productData");
const userData = require("./userData");
// const contractorData = require("./contractorData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData);

  const product = await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();
