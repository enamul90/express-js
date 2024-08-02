let express = require('express')
app = express();

app.use(function (req, res, next){
    console.log('service start Meddile wire')
    next();
});


app.get('/', function (req, res){
    res.send('This Is home page')
});

app.get('/About', function (req, res){
    res.send('This Is about page')
});

app.get('/Contact', function (req, res){
    res.send('This Is contact page')
});



app.listen(8000, function (){
    console.log("server start")
})