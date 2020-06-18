'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticle() {
    const { ctx } = this;
    const { id } = ctx.params;
    const article = await ctx.model.ArticleModel.findAll({ where: { id } });
    ctx.body = article;
  }
}

module.exports = ArticleController;
