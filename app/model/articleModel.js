'use strict';

module.exports = app => {
  console.info(app);
  const { STRING, INTEGER, DATE, } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    created_at:DATE,
    updated_at:DATE,
    deleted_at:DATE,
    title:STRING,
    img_url:STRING,
    sub_title:STRING,
    category_id:INTEGER,
    stick:INTEGER,
    view:INTEGER,
    content:STRING,
  });

  return Article;
};
