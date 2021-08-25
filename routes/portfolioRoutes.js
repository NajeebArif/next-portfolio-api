
const express = require('express')
const router = express.Router();

const { getPortfolios } = require('../controllers/portfolioController')

router.get('', getPortfolios)

module.exports = router;