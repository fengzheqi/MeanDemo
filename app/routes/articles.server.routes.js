var users = require('../../app/controllers/users.server.controller'),
    article = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
    app.routes('/api/articles')
        .get(article.list)
        .post(users.requiresLogin, article.create);

    app.routes('/api/articles/:articleId')
        .get(article.read)
        .put(users.requiresLogin, article.hasAuthorization, article.update)
        .delete(users.requiresLogin, article.hasAuthorization, article.delete);

    app.param('articleId', article.articleByID);
}
