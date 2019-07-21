const assert = require('assert');
const Item = require('../src/item');

describe('Creating items', () => {
    it('save an item', async () => {
        const dbItem = new Item({ name: 'Test item'});
        await dbItem.save();
        assert(!dbItem.isNew);
    })
});