const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log("connect to server port :"+port)
})

const routeUser  = require('./router/userRoute')
app.use(routeUser)