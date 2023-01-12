require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
/*const Workout = require('./models/workoutmodel')*/
//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routing 
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //lsitening for request
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening to port', process.env.PORT )
        })
    })
    .catch((error) => {
        console.log(error)
    })
