var express = require("express");
var path = require("path");

var port = 4000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, (err, success) => {
  if(err) {
    throw err; 
  } else {
    console.log("success");
  }
})



