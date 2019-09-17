const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
// const ItemsController = require('../../controllers/items-controller');
const app = require('../../app');
const Item = mongoose.model('item');

describe('ItemsController', () =>{
    it('should return all items with same type', async () => {
        const item1 = new Item({
            name: 'item1',
            type: 'armor',
            subtype: 'heavy'
        });
        await item1.save();
        const item2 = new Item({
            name: 'new item2',
            type: 'armor',
            subtype: 'light'
        });
        await item2.save()
        const item3 = new Item({
            name: 'new item3',
            type: 'helmet',
            subtype: 'roba'
        });
        await item3.save()
        const response = await request(app)
            .get('/api/items/armor');
        assert(response.body.length === 2);
    });

    it('should return all items with same subtype', async () => {
        const item1 = new Item({
            name: 'item1',
            type: 'armor',
            subtype: 'heavy'
        });
        await item1.save();
        const item2 = new Item({
            name: 'new item2',
            type: 'armor',
            subtype: 'light'
        });
        await item2.save()
        const item3 = new Item({
            name: 'new item3',
            type: 'helmet',
            subtype: 'roba'
        });
        await item3.save()
        const response = await request(app)
            .get('/api/items/armor/light');
        assert(response.body.length === 1);
    });

    it('should create an item', async () => {
        const itemsBefore = await Item.countDocuments();
        await request(app)
            .post('/api/items')
            .send({
                name: 'new item',
                type: 'heavy',
                subtype: 'Heavy Plate',
                level: 15,
                defaultAddons: {
                    physicalDef: 2176,
                    metalDef: 913,
                    woodDef: 913,
                    waterDef: 913,
                    fireDef: 913,
                    earthDef: 913,
                },
                required: {
                    characterClasses: [],
                    level: 100,
                    reputation: 200000
                }
            });
        const itemsAfter = await Item.countDocuments();
        assert(itemsAfter === itemsBefore + 1);
    });

    it('shoul update an item', async () => {
        const updatedName = 'updated name';
        const item = new Item({
            name: 'new item',
        });
        await item.save();
        await request(app)
            .put(`/api/items/${item.id}`)
            .send({
                name: updatedName,
            });
        const updatedItem = await Item.findOne({ name: updatedName })
        assert(updatedItem !== null);
    });

    it('shoul delete an item', async () => {
        const item = new Item({
            name: 'new item',
        });
        await item.save();
        const itemsBefore = await Item.countDocuments();
        await request(app)
            .delete(`/api/items/${item.id}`);
        const itemsAfter = await Item.countDocuments();
        assert(itemsBefore - 1 === itemsAfter);
    });

    it('shoul delete an item', async () => {
        const item = new Item({
            name: 'new item',
        });
        await item.save();
        const itemsBefore = await Item.countDocuments();
        await request(app)
            .delete(`/api/items/${item.id}`);
        const itemsAfter = await Item.countDocuments();
        assert(itemsBefore - 1 === itemsAfter);
    });
});