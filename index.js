//require stand's for Singleton Pattern - the instance of require is created only once
// as DB connection or anything else;
var express = require('express');
var path     = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');

//initializing the object instance
const app = express();
const port = 3000;

// VIEW engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));
app.get('/',function (req, res) {
    res.render('pages/home')
});


app.listen(port, () => console.log(`EJS app Started on port ${port}!`));

//fetch form data from the request
app.use(bodyParser.urlencoded({extended:false}))

module.exports = app;




