
const express = require('express')
const router = express.Router();

router.get('', (req, res)=>{
    return res.json({data:[1,2,3,4]})
})

module.exports = router;