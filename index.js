

const express = require('express')
const server = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;
const mongoose = require('mongoose')
const config = require('./config/dev');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) { console.error(err); }
    else {
        console.log('Connected to DB!');
    }
})

server.use(express.json());

server.use('/api/v1/portfolios', require('./routes/portfolioRoutes'));

server.listen(PORT, err => {
    if (err)
        console.error(err)
    else
        console.info(`Server started on port ${PORT}`)
})
