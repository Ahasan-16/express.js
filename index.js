var express = require('express');
var server=express();


server.get('/',function(req,res){
    res.send("this is home page");
});

server.post('/about',function(req,res){
    res.send("this is about page");
});

server.put('/contact',function(req,res){
    res.end("this is contact page");
});

server.delete('/terms',function(req,res){
    res.end("this is terms page");
});



server.listen(4000,function(){
    console.log("Server started on port 4000");
})