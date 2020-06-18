'use strict';
const Controller = require('egg').Controller;

class TagController extends Controller {
  async getTagAll() {
    const { ctx } = this;
    const tags = await ctx.model.TagModel.findAll()
    ctx.body = tags;
  }
}

module.exports = TagController;
