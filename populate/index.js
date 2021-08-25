
const mongoose = require('mongoose')
const config = require('../config/dev');
const fakeDb = require('./FakeDB')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, async err => {
    if (err) { console.error(err) }
    else {
        console.info('> Starting populate Script...')
        await fakeDb.populate();
        await mongoose.connection.close();
        console.info('> DB Refreshed!')
    }
})