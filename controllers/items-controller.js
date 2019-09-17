const Item = require('../database/models/item');

module.exports = {
    async index(req, res) {
        const props = {
            type: req.params.type
        };
        if (req.params.subtype) {
            props.subtype = req.params.subtype;
        }
        const items = await Item.find(props);
        res.send(items);
    },
    async create(req, res) {
        const props = req.body;
        const item = await Item.create(props);
        res.send(item);
    },
    async update(req, res) {
        const id = req.params.id;
        const props = req.body;
        const item = await Item.updateOne({ _id: id }, props);
        res.send(item);
    },
    async delete(req, res) {
        const id = req.params.id;
        const item = await Item.deleteOne({ _id: id });
        res.send(item);
    }
};