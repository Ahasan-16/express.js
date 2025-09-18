var express = require('express');
var app = express();
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,"./uploads");//uploads directory ta toiri kore nite hobe root directory te
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
 var upload=multer({storage:storage}).single("myfile");//myfile name ta postman er key same hobe

 app.post("/six",function(req,res){
     upload(req, res,function(error){
         if(error)
         {
             res.send("file upload error");
         }else{
             res.send("File upload success");
         }

     });
 });
 app.listen(8080,function(){
     console.log("Server started on port 8080");
 })