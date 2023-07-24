

const express=require('express')
const {InitializeServer} = require('./express-start-app')
const { PORT } = require('./config')
const {connectDB} = require('./database/index')
const app=express()
const StartServer=async ()=>{
    
    try {
    app.use(express.json())
    await InitializeServer(app,)
    await connectDB()
    await app.listen(PORT,()=>{
        console.log(`Server Started @ ${PORT}`)
    })
} catch (error) {
    console.log(error.message)
    throw new Error('Error Occured @ Initalizing the app')
}
}


StartServer()