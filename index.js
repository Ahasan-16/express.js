var express=require('express');
var app=express();

//simple post request
app.post('/one',function(req,res){
    res.end("this is simple post request");
});
//kibhabe query maddome url teke data nibo
app.post('/two',function(req,res){
    let username=req.query.userName;
    let password=req.query.passWord;
    res.send(username+" "+password);
});
//header er data kibhabe access korbo,je gola postman e set kora take
app.post('/three',function(req,res){
    let username=req.header("userName");
    let password=req.header("passWord");
    res.send(username+" "+password);
});

//postman er body te json data diye oi data kibhabe niye asbo
//npm install body-parser
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.post('/four',function(req,res){
    let jsonData=req.body;
    //specific ekta o nite pari
    // let name=jsonData["name"];
    let jsonString=JSON.stringify(jsonData);
    res.send(jsonString);
});


//postman er body te multipart form-data niye asbo
//npm install --save multer
var multer=require('multer');
var multer=multer();
app.use(multer.array());
app.use(express.static('public'));
app.post('/five',function(req,res){
     let jsonData=req.body;
     res.send(JSON.stringify(jsonData));
});



app.listen(8080,function(){
    console.log("Server started on port 8080");
})