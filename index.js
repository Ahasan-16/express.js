var express=require('express');
var app=express();

//simple get request
app.get('/one',function(req,res){
    res.end("This is simple get request");
})

//url er bitor je query pass kori sei parameter niye ki bhabe kaj korbo
app.get('/two',function(req,res){

    //ei query er pore kon parameter ta dhorbo tar name,ei gola url e set kore
    //formate ta ei rkm localhost:8080/two?firstName=Mohammad&lastName=Ahasan
    let firstname=req.query.firstName;
    let lastname= req.query.lastName;
    res.end(firstname+ " "+ lastname);
});

//postman e header data set kore oi gola kibhabe use korbo
app.get('/three',function(req,res){
   //firstName abong lastName postman er header section jai add kora laage
    let firstname= req.header("firstName");
   let lastname= req.header("lastName");
   res.end(firstname+ " "+ lastname);
})

app.listen(8080,function(){
    console.log("Server started on port 8080");
})