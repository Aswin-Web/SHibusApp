require('dotenv').config()

module.exports={
    PORT:process.env.PORT || 5001,
    MONGO_URL:process.env.MONGO_URL,
    JWT_KEY:process.env.JWT_KEY
}