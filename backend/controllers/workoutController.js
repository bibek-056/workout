
const Workout = require('../models/workoutmodel')

//get all workouts
/*const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params


    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}*/

//create a new workout
const createWorkout = async (req, res) => {
    
    const {title, reps, load} = req.body

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout


//update a workout


module.exports = {
    createWorkout
};

