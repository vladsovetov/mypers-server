const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSetSchema = new Schema({
    name: String,
    addons: Array
});

const itemSet = mongoose.model('itemset', ItemSetSchema);

module.exports = itemSet;