"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class glycemia extends Model {
    static associate(models) {}
  }
  glycemia.init(
    {
      date: DataTypes.STRING,
      hour: DataTypes.STRING,
      value: DataTypes.INTEGER,
      observation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "glycemia",
    }
  );
  return glycemia;
};
