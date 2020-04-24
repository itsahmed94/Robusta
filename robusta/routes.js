const express = require('express');
const router = express.Router();

//main page
router.get('', (req, res)=>{
    res.render('index.ejs', {title : 'MainPage'});
});

// router.get('*', (req, res)=>{
//     res.render('404.ejs', {title : '404 Page Not Found'});
// });

//about
router.get('/about', (req, res)=>{
    res.render('index.ejs', {title : 'about'});
});

//services
router.get('/services', (req, res)=>{
    res.render('index.ejs', {title : 'help'});
});

module.exports = router;