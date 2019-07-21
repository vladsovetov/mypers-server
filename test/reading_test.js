const assert = require('assert');
const Item = require('../src/item');

describe('Reading items', () => {
    let dbItem;

    beforeEach(async () => {
        dbItem = new Item({ name: 'test' });
        await dbItem.save();
    });

    it('find all items with name test', async () => {
        const items = await Item.find({ name: 'test' });
        assert(items.length === 1);
    });
});