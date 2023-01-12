const express = require('express')
const Workout = require('../models/workoutmodel')


const router = express.Router()

router.get('/', (req, res) => {
    
    res.json({mssg: 'Get a all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

router.post('/', async(req, res) => {
    const {title, reps, load} = req.body

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

/*router.post('/', (req, res) => {
    res.json({mssg: 'Create a workout'})
})*/

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg: 'Update a workout'})
})

module.exports = router;
