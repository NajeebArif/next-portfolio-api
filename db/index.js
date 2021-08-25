

const mongoose = require('mongoose')
const config = require('../config/dev');

require('./models/portfolio')

exports.connect = () => {
    return new Promise((resolve, reject) =>{
        mongoose.connect(config.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) { reject(err); }
            else {
                resolve('Connected to DB.');
            }
        })
    })
}