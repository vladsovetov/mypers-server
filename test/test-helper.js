const mongoose = require('mongoose');

before(async () => {
    await mongoose.connect('mongodb://localhost/mypers-server-tests', {useNewUrlParser: true});
    await mongoose.connection
        .once('open', () => console.log('Conected'))
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach(async () => {
    for (let collectionName in mongoose.connection.collections) {
        try {
            await mongoose.connection.collections[collectionName].drop();
        } catch (e) {
            console.log(`collection ${collectionName} does not exist`);
        }
    }
});