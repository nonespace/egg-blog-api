'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('tags');
  },
};
