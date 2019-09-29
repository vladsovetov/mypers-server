const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSetSchema = new Schema({
    name: String,
    addons: Array
});

const itemsSet = mongoose.model('itemsset', ItemsSetSchema);

module.exports = itemsSet;