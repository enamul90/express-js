let express = require('express')
app = express();

// Simple Get Request
app.get('/', function (req, res){

    res.end('welcome.js')
});

// Get Request With URL Query
app.get('/url', function (req, res){

    let fastName = req.query.fastName;
    let lastName = req.query.lastName;
    res.end(fastName + " " + lastName);
});


// Working With Get Request Header
app.get('/header', function (req, res){

    let fastName = req.header('fastName');
    let lastName = req.header('lastName');
    res.end(fastName + " " + lastName);
});




app.listen(8000, function (){
    console.log("server start")
})