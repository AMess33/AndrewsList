const User = require("./User");
const Category = require("./category");
const Product = require("./product");
const Project = require("./project");
const Bid = require("./bid");

//1. Category-Product Association (One to Many)
Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "cateogry_id",
});

//2. Product/Project Association (Many to Many)
Product.belongsToMany(Project, { through: "ProjectProduct" });
Project.belongsToMany(Product, { through: "ProjectProduct" });

//3. Project/User Associaiton (Many to Many)
User.belongsToMany(Project, { through: "UserProject" });
Project.belongsToMany(User, { through: "UserProject" });

//4. Bid/Project Associations (One to Many)
Project.hasMany(Bid, {});
Bid.belongsTo(Project, {});

// // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
// Driver.hasMany(Car, {
//   foreignKey: "driver_id",
//   onDelete: "CASCADE",
// });

// // The association can also be created from the Car side
// Car.belongsTo(Driver, {
//   foreignKey: "driver_id",
// });

module.exports = { User, Category, Product, Project, Bid };
