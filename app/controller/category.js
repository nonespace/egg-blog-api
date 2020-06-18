'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getAll() {
    const { ctx } = this;
    const categories = await ctx.model.CategoryModel.findAll()
    ctx.body = categories;
  }
}

module.exports = CategoryController;
