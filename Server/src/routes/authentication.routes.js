const generateJWT = require("../utils/generateJWT.utils")

function authenticationRoutes(app){
    app.get('/test',async (req,res,next)=>{
        const token =await  generateJWT()
        console.log(token)
        res.status(200).json({token})
    })
}
module.exports={authenticationRoutes}