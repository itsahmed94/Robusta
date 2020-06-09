const express = require('express');
const router = express.Router();

//main page
router.get('', (req, res)=>{
    res.render('index.ejs');
});

// router.get('*', (req, res)=>{
//     res.render('404.ejs', {title : '404 Page Not Found'});
// });

//about
router.get('/weather', (req, res)=>{
    res.render('weather', {title : 'about'});
});

//services
router.get('/services', (req, res)=>{
    res.render('help.ejs', {title : 'help'});
});

module.exports = router;