'use strict';
const Service = require('egg').Service;

class Article extends Service {
  async find(id) {
    const article = await this.app.mysql.get('articles', { id });
    return article;
  }
}
module.exports = Article;
