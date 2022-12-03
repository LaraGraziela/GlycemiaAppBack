'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glycemia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  glycemia.init({
    date: DataTypes.STRING,
    hour: DataTypes.STRING,
    value:  DataTypes.INTEGER,
    observation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'glycemia',
  });
  return glycemia;
};