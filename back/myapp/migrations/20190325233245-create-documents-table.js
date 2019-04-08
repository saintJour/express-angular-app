'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CourseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('note', 'book', 'test', 'exam')
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      thumbnailKey: {
        type: Sequelize.STRING
      },
      approved: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Documents');
  }
};