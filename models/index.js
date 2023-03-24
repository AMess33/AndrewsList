const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const Project = require("./Project");
const Bid = require("./Bid");

//1. Category-Product Association (One to Many)
Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "cat"
});

//2. Product/Project Association (Many to Many)
Product.belongsToMany(Project, { through: "" });
Project.belongsToMany(Product, { through: "" });

//3. Project/User Associaiton (Many to Many)
User.belongsToMany(Project, { through: "" });
Project.belongsToMany(User, { through: "" });

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
