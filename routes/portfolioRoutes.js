
const express = require('express')
const router = express.Router();

const { checkJwt } = require('../controllers/auth');

const { getPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController')

router.get('', getPortfolios)
router.get('/:id', getPortfolioById)
router.post('',checkJwt, createPortfolio);
router.patch('/:id', checkJwt, updatePortfolio);
router.delete('/:id', checkJwt, deletePortfolio);

module.exports = router;