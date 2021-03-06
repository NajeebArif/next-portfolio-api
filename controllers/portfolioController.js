
const mongoose = require('mongoose')
const Portfolio = mongoose.model('Portfolio')

exports.getPortfolios = async (req, res) => {
    const portfolios = await Portfolio.find({})
    return res.json(portfolios)
}

exports.getPortfolioById = async (req, res) => {
    try {
        const portfolio = await Portfolio.findById(req.params.id);
        return res.json(portfolio)
    } catch (err) {
        return res.status(422).send(err.message);
    }
}

exports.createPortfolio = async (req, res) => {
    const portfolioData = req.body;
    try {
        const portfolio = new Portfolio(portfolioData);
        portfolio.userId = req.user.sub;
        const newPortfolio = await portfolio.save();
        return res.json(newPortfolio)
    } catch (e) {
        return res.status(422).send(e.message);
    }
}

exports.updatePortfolio = async (req, res) => {
    const { body, params: { id } } = req;

    try {
        const updatedPortfolio = await Portfolio.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
        return res.json(updatedPortfolio);
    } catch (error) {
        return res.status(422).send(error.message);
    }
}


exports.deletePortfolio = async (req, res) => {
    const portfolio = await Portfolio.findOneAndRemove({ _id: req.params.id });
    return res.json({ _id: portfolio.id })
}