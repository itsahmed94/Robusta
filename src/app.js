const path = require('path');
const express = require('express');
const router = require('../robusta/routes');

//make a express app
const app = express();

//environment PORT
const PORT = process.env.PORT || 3000;

//access to public assets 
const publicDirectoryPath = path.join(__dirname, '../public')
//you can set your own path for view folder or rename you views folder to another and set its path
const viewPath = path.join(__dirname, '../templates/views');
//const partialsPath= path.join(__dirname, '../templates/partials');


//  important const bootstrap = path.join(__dirname, '../node_modules')
app.use('/jq', express.static(path.join(__dirname , '../node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname , '../node_modules/bootstrap/dist/js')));
app.use('/bootstrap', express.static(path.join(__dirname , '../node_modules/bootstrap/dist/css')));
app.use(express.static(publicDirectoryPath));
app.use('/robusta/global', router);
app.get('/', (req, res)=>{
    res.render('index.ejs', {title : 'Main Page'});
})
app.get('/*', (req, res)=>{
    res.render('404.ejs', {title : '404 Not Found'});
})

console.log(path.join(__dirname , '../node_modules/jquery/dist'));

//set up view path and engine
app.set('view engine', 'ejs');
app.set('views', viewPath);




//make a server 
app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})