"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Student", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      idade: {
        type: Sequelize.DATE,
        allowNull: false
      },
      peso: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      altura: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("Student");
  }
};
