let express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());



// Simple Post Request
app.post('/', function (req, res){
    res.send('welcome.js')
});

// Post Request With URL Query    URL http://localhost:8000/query?nameOne=Enamul&nameTwo=Firoz
app.post('/query', function (req, res){

    let fastName = req.query.nameOne;
    let lastName = req.query.nameTwo;
    res.end(fastName+" "+lastName);
});

//  Post Request With Header Properties
app.post('/header', function (req, res){

    let fastName = req.header('fastName');
    let lastName = req.header('lastName');
    res.end(`Your Name : ${fastName} post : ${lastName}`);

});

//  Post application-json
app.post('/json', function (req, res){
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
});





app.listen(8000, function (){
    console.log("server start")
})