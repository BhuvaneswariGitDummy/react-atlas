const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes/userRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const url = process.env.MONGOURL
const port = process.env.PORT

mongoose.connect(url)
.then(()=>{
    console.log("DB connected successfully")
    app.listen(port,()=>{
        console.log(`App is running at Port: ${port}`)
    })
})
.catch((err)=>{
    console.log(err)
})

app.use('/api',route)