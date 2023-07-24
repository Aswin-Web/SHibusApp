const mongoose=require('mongoose')
const { MONGO_URL } = require('../config')

const ConnectDB =async ()=>{
    try {
        await mongoose.connect(MONGO_URL)
        .then(()=>{
            console.log("MONGODB CONNECTION CONNECTED SUCCESSFULLY")
        })
        
    } catch (error) {
        console.log(error.message)
        throw new Error('Error at DB Connection')
    }
}
module.exports=ConnectDB