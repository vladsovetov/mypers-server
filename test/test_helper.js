const mongoose = require('mongoose');

before(async () => {
    await mongoose.connect('mongodb://localhost/tests', {useNewUrlParser: true});
    await mongoose.connection
        .once('open', () => console.log('Conected'))
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach(async () => {
    await mongoose.connection.collections.items.drop();
});