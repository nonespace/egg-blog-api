'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, } = app.Sequelize;
  const Tag = app.model.define('tags', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    created_at:DATE,
    updated_at:DATE,
    deleted_at:DATE,
    name:STRING,
  });

  return Tag;
};
