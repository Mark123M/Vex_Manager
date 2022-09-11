/*const AWS = require('aws-sdk')

const s3 = AWS.S3()

s3.putObject({
    Body: 'hello', 
    Bucket: "mark123-uploads", 
    Key: "my-file.txt"
}) */

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const path = require('path');


const postRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

dotenv.config()
mongoose.connect(process.env.MONGO_URL)
    .then(res =>{
        console.log("connected to db")
    })

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})