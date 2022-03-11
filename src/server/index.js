var path = require('path')
const express = require('express')
const getSentiment=require('./handleRequest.js')
const bodyParser = require("body-parser");
const cors = require("cors");
//body parser
const app = express()
// Enable All CORS Requests
app.use(cors());
app.use(express.static('dist'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})
app.post('/', async function (req, res) {
    if(!req.body.article ) { 
        return res.status(400).json({
           message: 'Invalid input'
        })
        
    } 
    const {article}=req.body
    
    const sentiment=await getSentiment(article)
    
    res.send({
         article:article,
         sentiment: sentiment    
    })
    
})
 
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


