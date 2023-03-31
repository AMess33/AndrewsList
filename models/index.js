const User = require("./User");
const Category = require("./category");
const Product = require("./product");
const Project = require("./project");

//1. Category-Product Association (One to Many)
Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

//2. Product/Project Association (Many to Many)
Product.belongsTo(Project, {
  foreignKey: "product_id",
});
Project.hasMany(Product, {
  foreignKey: "product_id",
});

//3. Project/User Associaiton (Many to Many)
User.belongsToMany(Project, { through: "UserProject" });
Project.belongsToMany(User, { through: "UserProject" });

module.exports = { User, Category, Product, Project };
