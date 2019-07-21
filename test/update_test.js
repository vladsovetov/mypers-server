const assert = require('assert');
const Item = require('../src/item');

describe('Updating items', () => {
    let dbItem;

    beforeEach(async () => {
        dbItem = new Item({ name: 'test' });
        await dbItem.save();
    });

    const assertName = async (operation) => {
        await operation;
        const items = await Item.find({});
        assert(items.length === 1);
        assert(items[0].name === 'new');
    };

    it('update using set and save', async () => {
        dbItem.set('name', 'new');
        await assertName(dbItem.save());
    });

    it('update using updateOne', async() => {
        await assertName(dbItem.updateOne({ name: 'new'}));
    });

    it('update using updateMany', async () => {
        await assertName(Item.updateMany({ name: 'test' }, { name: 'new' }));
    });

    it('update using updateOne', async () => {
        await assertName(Item.updateOne({ name: 'test' }, { name: 'new' }));
    });
});