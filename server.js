require('dotenv').config()
const express = require('express')
const infoRoutes = require('./routes/info')
var cors = require('cors')
const moment = require('moment')

//express app
const app = express()

//middleware
app.use(express.json())

//handling CORS
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}
));

app.use((req, res, next)=>{
    //console.log(req.path, req.method)
    next()
})

//routes
//app.use('/api', infoRoutes)

const day = new Date().toLocaleDateString('en-us', { weekday:"long"}) 
const current_day = moment().day()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const utc_time = moment.utc().format()
    console.log(utc_time)


app.get('/api', (req,res) => {
    const {slack_name, track} = req.query
    return res.status(200).json({
        slack_name:slack_name,
        current_day:weekDays[current_day],
        utc_time: utc_time,
        track: track,
        github_file_url:'https://github.com/AdeCode/HNGTasks/blob/main/server.js',
        github_repo_url:'https://github.com/AdeCode/HNGTasks/tree/main',
        status_code: 200,
    })
})

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})