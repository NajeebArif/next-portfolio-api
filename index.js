

const express = require('express')
const server = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;

const PortfoliosRoute = require('./routes/portfolio')

server.use(express.json());

server.use('/api/v1/portfolios',PortfoliosRoute);

server.listen(PORT, err => {
    if (err)
        console.error(err)
    else
        console.info(`Server started on port ${PORT}`)
})
