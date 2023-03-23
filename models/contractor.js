const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Contractor extends Model {}

Contractor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: DataTypes.NOW,
    },
    email: {
      type: DataTypes.string,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.string,
      allowNull: false,
    },
    password: {
      type: DataTypes.string,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "contractor",
  }
);

module.exports = Contractor;
