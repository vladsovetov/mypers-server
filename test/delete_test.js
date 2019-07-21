const assert = require('assert');
const Item = require('../src/item');

describe('Deleting items', () => {
    let dbItem;

    beforeEach(async () => {
        dbItem = new Item({ name: 'test' });
        await dbItem.save();
    })

    it('delete using instance remove', async () => {
        await dbItem.remove();
        const item = await Item.findOne({ name: 'test' });
        assert(item === null);
    });

    it('delete using deleteOne', async () => {
        await Item.deleteOne({ name: 'test' });
        const item = await Item.findOne({ name: 'test' });
        assert(item === null);
    });

    it('delete using findByIdAndDelete', async () => {
        await Item.findByIdAndDelete({ _id: dbItem._id });
        const item = await Item.findOne({ _id: dbItem._id });
        assert(item === null);
    });
});