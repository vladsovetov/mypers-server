const ItemsController = require('../controllers/items-controller');

module.exports = (app) => {
    app.get('/api/items/:type/:subtype?', ItemsController.index);
    app.post('/api/items', ItemsController.create);
    app.put('/api/items/:id', ItemsController.update);
    app.delete('/api/items/:id', ItemsController.delete);
};