'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, } = app.Sequelize;
  const Category = app.model.define('categories', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    created_at:DATE,
    updated_at:DATE,
    deleted_at:DATE,
    name:STRING,
  });

  return Category;
};
