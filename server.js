// Get dependencies
const express = require('express');
const path = require('path');
// const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
//const api = require('./server/routes/api');

const app = express();
var mongojs = require('mongojs');


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));


var db=mongojs('test2',['loginDetails1']);


app.get('/selectionProject',function(req,res){


  db.loginDetails1.find({},function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})
app.post('/postModuleName',function(req,res)
{




    db.moduleName.insert(req.body,function(err,doc)
        {
        res.json(doc);
        //console.log(doc)
       });


})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//app.listen(2000) ;
const port = "2000";
app.listen (port, function(){
console.log("Server is running on" + port) ;
});
