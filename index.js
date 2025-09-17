var express = require('express');
var app= express();

//simple string response get otoba post er sahajje ,res parameter diye send er maddome response dea jai
app.get('/one',function(req,res){
    res.send('this is simple response');//ei ta res er body
});

//response status code manipulation
app.get('/two',function(req,res){
    res.status(406).end();
});

//kibhabe json response niye asbo
app.get('/three',function(req,res){

    let myJSONArry=[
        {
            name:"Ahasan",
            city:"chattogram",
            age:"25"
        },
        {
            name:"B",
            city:"dhaka",
            age:"26"
        },
        {
            name:"c",
            city:"Rajshai",
            age:"27"
        }
    ]
    res.json(myJSONArry);//ei khane json arry pass kora lage, arrry take onk golo json object takte pare
});

//kibhabe download response create korbo

app.get('/four',function(req,res){
    res.download("./download/OIP.webp");
});

// kibhabe response redirect korbo

app.get('/five',function(req,res){
   //one path e redire korbe
    res.redirect("http://localhost:8080/one");
});

//response header e kibhabe data rakbo

app.get('/six',function(req,res){
    //ei khane key value er majkane comma takbe dui tai double quote er moddeh
    res.append("name","Mohammad Ahasan");
    res.append("city","Chattogram");

    //ei dea laage
    res.status(200).end();
})

// response e kibhabe cookie set korbo
app.get('/seven',function(req,res){
    // res.cookie("name","Mohammad Ahasan");
    res.cookie("city","Chattogram");
    res.cookie("age","25");

    res.status(200).end("cookies set successfully.");
})

// kibhabe cookie teke data delete korbo
app.get('/eight',function(req,res){
    res.clearCookie("city");
    res.clearCookie("age");

    res.status(200).end("cookies delete successfully.");

})


app.listen(8080,function(){
    console.log("Server started on port 8080");
})