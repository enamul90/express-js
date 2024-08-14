let express = require('express')
app = express();


app.use('/contact',function (req, res, next){
    console.log('contact page middleware')
    next();
});


app.get('/', function (req, res){
    res.send('This Is home page')
});

app.get('/about', function (req, res){
    res.send('This Is about page')
});



app.get('/contact', function (req, res){
    res.send('This Is contact page')
});



app.listen(8000, function (){
    console.log("server start")
})