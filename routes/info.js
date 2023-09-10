const express = require('express')
const router = express.Router()

router.get('/', ()=>{
    res.json({
        message: 'Welcome to HNG'
    })
})

const date = new Date() 
const day = new Date().toLocaleDateString('en-us', { weekday:"long"}) 

router.get('/myinfo', (req,res) => {
    const {slack_name, track} = req.query
    return res.status(200).json({
        slack_name:slack_name,
        current_day:day,
        utc_time: date,
        track: track,
        github_file_url:'https://github.com/AdeCode/HNGTasks/blob/main/server.js',
        github_repo_url:'https://github.com/AdeCode/HNGTasks/tree/main',
        status_code: 200,
    })
})

module.exports = router