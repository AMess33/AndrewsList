// Create bid model that references most properties from the project model, but also has an amount for the individual bid amount, contractor id, other data relevant to that one specefic bid (dates).
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Bid extends Model {}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_completion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    bid_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "bid",
  }
);

module.exports = Bid;
