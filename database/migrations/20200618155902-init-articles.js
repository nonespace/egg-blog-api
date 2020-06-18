'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
      title: STRING,
      img_url: STRING,
      sub_title: STRING,
      category_id: INTEGER,
      stick: INTEGER,
      view: INTEGER,
      content: STRING,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};
