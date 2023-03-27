const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProjectProduct extends Model {}

ProjectProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project: {},
    products: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "projectproduct",
  }
);

module.exports = ProjectProduct;
