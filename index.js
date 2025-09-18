var express=require('express');
var app=express();


app.use(function(req,res,next){
    console.log("i am middle ware");
    next();
})



app.get('/',function(req,res){
    res.send("this is home page");
});

app.get('/login',function(req,res){
    res.send("this is login page");
});

app.get('/logout',function(req,res){
    res.send("this is logout page");
})




app.listen(8080,function(){
    console.log("Server started on port 8080");
});