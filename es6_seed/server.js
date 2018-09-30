var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');

let notes = [
  {name: "Task 1"},
  {name: "Task 2"},
  {name: "Task 3"}
]

app.use(express.static(__dirname+"/orangeAngular"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/hello', (req, res) => {
  res.send("Hello there!")
})
app.get('/notes', (req, res) => {
  res.send(notes);
})
app.post('/add-note', (req, res) => {
  console.log(req.body.name)
  let note = {name: req.body.name}
  notes.push(note)
  res.json("Note added")
})
app.listen(8080);
console.log("Server started on port 8080...")


/*

FOLDER STRUCTURE:

root
  app 
  server
     server.js
	 package.json
  index.html
  package.json
  
*/
  
