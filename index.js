

const express = require('express')
const server = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;
const { promisify } = require('util');

async function runServer() {
    
    const isDbConnected = await require('./db').connect();
    console.log(isDbConnected)

    server.use(express.json());
    server.use('/api/v1/portfolios', require('./routes/portfolioRoutes'));
    server.use('/api/v1/blogs', require('./routes/blogsRoutes'));

    server.listen(PORT, err => {
        if (err)
            console.error(err)
        else
            console.info(`Server started on port ${PORT}`)
    })
}

runServer();
