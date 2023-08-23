"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("glycemia", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("glycemia", "userId");
  },
};
