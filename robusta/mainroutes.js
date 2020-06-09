const express = require('express');
const router = express.Router();



router.get('/', (req, res)=>{
    res.render('index.ejs');
})



router.get('/*', (req, res)=>{
    res.render('404.ejs', {title : '404 Not Found'});
})


module.exports = router;