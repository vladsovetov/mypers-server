const Item = require('../database/models/item');

module.exports = {
    async index(req, res, next) {
        try {
            const props = {
                type: req.params.type
            };
            if (req.params.subtype) {
                props.subtype = req.params.subtype;
            }
            const items = await Item.find({});
            res.send(items);
        } catch(e) {
            next(e);
        }
    },
    async create(req, res, next) {
        try {
            const props = req.body;
            const item = await Item.create(props);
            res.send(item);
        } catch (e) {
            next(e);
        }
    },
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const props = req.body;
            const item = await Item.updateOne({ _id: id }, props);
            res.send(item);
        } catch(e) {
            next(e);
        }
    },
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const item = await Item.deleteOne({ _id: id });
            res.send(item);
        } catch(e) {
            next(e);
        }
    }
};