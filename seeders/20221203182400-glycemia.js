"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "glycemia",
      [
        {
          date: "2021-12-03",
          hour: "18:24",
          value: 100,
          observation: "Normal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2021-12-04",
          hour: "18:25",
          value: 150,
          observation: "Alta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2021-12-05",
          hour: "18:26",
          value: 100,
          observation: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('glycemia', null, {});
  },
};
