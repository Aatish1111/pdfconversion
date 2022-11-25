const express = require("express")

const path = require('path')

const multer = require('multer')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))

app.use(bodyParser.json())

// Upload directory as static
app.use(express.static(path.join(__dirname + "uploads")))


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(5000, ()=>{
    console.log("App is Listening on Port 5000")
})