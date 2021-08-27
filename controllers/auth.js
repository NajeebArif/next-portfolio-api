const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const config = require('../config/dev');

// Authentication middleware
// This middleware will check access token in authorization headers
// of a request
// It will verify access token against Auth0 JSON web key set
exports.checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-rloaycly.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'custom_portfolio_api',
    issuer: 'https://dev-rloaycly.us.auth0.com/',
    algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
    if(role==='admin'){
        role = 'create:portfolios'
    }
    console.log(user)
    if (user && user['scope'].includes(role)) {
        next();
    } else {
        return res.status(401).send('You are not authorized to access this resource!')
    }
}