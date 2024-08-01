let express = require('express')
app = express();



app.get('/', function (req, res){
    res.send('welcome To Home')

});


app.get('/about', function (req, res){
    res.send('welcome About')
});


app.get('/contact', function (req, res){
    res.send('welcome Contact')
});

app.get('/product', function (req, res){
    res.send('welcome product')
});

app.get('/username', function (req, res){
    res.send('welcome user')
});

app.get('/myname', function (req, res){
    res.send('welcome me')
});




app.listen(8000, function (){
    console.log("server start")
})