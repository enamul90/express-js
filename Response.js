let express = require('express')
app = express();



//  Send () Response  body
//  end () Response  end


// Simple String Response  (get)
app.get('/one', function (req, res){
    res.send('this is Simple String Response - get')
});


app.post('/two', function (req, res){
    res.send('this is Simple String Response - post')
});


// Response Status Code  (post)

app.get('/three', function (req, res){
    res.status(201).end('response body')

});

// JSON Response

app.get('/fore', function (req, res){

    let myJson = [
        {
            name: "enamul",
            fanthe: "my father",
            age:20,
        },

        {
            name: "enamul",
            fanthe: "my father",
            age:20,
        },
    ]

    res.json(myJson);

});


// Response Download
app.get('/five', function (req, res){
    res.download("./image/abc.png");

});

// Response Redirect

app.get('/dhaka', function (req, res){
    res.redirect("me")

});

app.get('/me', function (req, res){
    res.send("patuakhali barishal ")

});

//  Response Header

app.get('/six', function (req, res){

    res.append("name","Hossen")
    res.append("home","12B")
    res.append("thana","glachipa")

    res.send("hello").end()

});


//  Response Set Cookies

app.get('/seven', function (req, res){
    res.cookie("name","Enamul")
    res.cookie("name-2","Enamul")
    res.cookie("name-3","Enamul")
    res.cookie("name-4","Enamul")
    res.end("cookie data")

});

//  Response Cookies  remove


app.get('/eight', function (req, res){

    res.clearCookie("name")
    res.clearCookie("name-2")

    res.end("cookie data remove")

});







app.listen(8000, function (){
    console.log("server start")
})


