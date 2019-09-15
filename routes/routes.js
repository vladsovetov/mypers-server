const ItemsController = require('../controllers/items-controller');

module.exports = (app) => {
    app.post('/api/items', ItemsController.create);
    app.put('/api/items/:id', ItemsController.update);
    app.delete('/api/items/:id', ItemsController.delete);
};