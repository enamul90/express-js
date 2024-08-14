let express = require('express');

let multer = require('multer');
let multerObj = multer();

let app = express();

app.use(multerObj.array());
app.use(express.static('public'));


// 1 Working With Multipart Form Data
app.post('/multer', function (req, res){
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
});



// 2 File Upload

let storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null,'./uploads')
    },
    filename: function(req, file, callBack){
        callBack(null,file.originalname)
    }
})

let upload = multer({storage:storage}).single('myfile')
app.post('/upload', function (req, res){
    upload(req, res, function (error){
        if (error){
            res.send("file upload error")
        }
        else {
            res.send('file upload dome')
        }
    })
});





app.listen(8000, function (){
    console.log("server start")
})