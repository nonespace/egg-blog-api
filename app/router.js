'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/article/:id', controller.article.getArticle);
  router.get('/tags', controller.tag.getTagAll);
  router.get('/categoryNav', controller.category.getAll);
};
