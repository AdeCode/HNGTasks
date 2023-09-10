require('dotenv').config()
const express = require('express')
const infoRoutes = require('./routes/info')
var cors = require('cors')

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
app.use('/api', infoRoutes)

app.get('/', ()=>{
    return res.json({
        message: 'Welcome to HNG'
    })
})

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})