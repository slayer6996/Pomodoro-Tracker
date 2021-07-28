const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/PomodoroTimerDB", { useUnifiedTopology: true, useNewUrlParser: true })

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const taskSchema = new mongoose.Schema({
    date: String,
    taskTitle: String,
    TaskTime: Number
})

const Task = new mongoose.model("Task", taskSchema)

const userSchema = new mongoose.Schema({
    email: String,
    dayTasks: [taskSchema]
})

const User = new mongoose.model("User", userSchema)

app.route('/')
    .post(function (req, res) {
        const userEmail = req.body.email
        const title = req.body.taskTitle
        const time = req.body.taskTime
        const date = new Date().toLocaleDateString()
        if (userEmail !== "") {
            User.findOne({ email: userEmail }, function (err, foundUser) {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else if (foundUser) {
                    var tasksList = foundUser.dayTasks
                    let i = 0;
                    for (i = 0; i < tasksList.length; i++) {
                        if (tasksList[i].date === date) {
                            if (tasksList[i].taskTitle.toLowerCase() === title.toLowerCase()) {
                                tasksList[i].taskTime += time
                                console.log("Time added to existing task")
                                res.send("Time added to existing task")
                            }
                        }
                    }
                    if (i === tasksList.length) {
                        const newTask = new Task({
                            date: date,
                            taskTitle: title,
                            taskTime: time
                        })
                        foundUser.dayTasks.push(newTask)
                        foundUser.save()
                        res.send("new task created")
                    }
                } else {
                    const newUser = new User({
                        email: userEmail,
                        dayTasks: []
                    })
                    const newTask = new Task({
                        date: date,
                        taskTitle: title,
                        taskTime: time
                    })
                    newUser.dayTasks.push(newTask)
                    newUser.save()
                    res.send("new task created")
                }
            })
        }
    })
    .get(function (req, res) {
        const userEmail = req.body.email
        User.findOne({ email: userEmail }, function (err, foundUser) {
            if (err) {
                console.log(err)
            } else {
                const date = new Date().toLocaleDateString()
                const tasks = []
                const tasksList = [...foundUser.dayTasks]
                for (let i = 0; i < tasksList.length; i++) {
                    if (tasksList[i].date === date) {
                        tasks.push(tasksList[i])
                    }
                }
                res.send(tasks)
                console.log(tasks)
            }
        })
    })

app.listen(5000, function () {
    console.log("server running at port 5000")
})