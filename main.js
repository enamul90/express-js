let express = require('express')
app = express();


app.get('/', function (req, res){
    res.send('welcome.js')
});



app.listen(8000, function (){
    console.log("server start")
})