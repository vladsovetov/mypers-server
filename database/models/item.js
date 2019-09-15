const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CharacterClass = require('./characterClass');
const itemSetSchema = require('./itemSet');

const ItemSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    color: {
        default: '#ffffffff',
        type: String
    },
    stars: {
        default: 1,
        type: Number
    },
    type: String,
    subtype: String,
    level: Number,
    defaultAddons: {
        health: Number,
        mana: Number,
        physicalDef: Number,
        metalDef: Number,
        woodDef: Number,
        waterDef: Number,
        fireDef: Number,
        earthDef: Number,
        physicalAttack: Number,
        magicAttack: Number,
    },
    required: {
        characterClasses: [CharacterClass],
        level: Number,
        strength: Number,
        agility: Number,
        intellect: Number,
        reputation: Number,
    },
    itemsSet: {
        type: Schema.Types.ObjectId,
        ref: 'itemset'
    }
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;